const { Router } = require('express');
const { validateLabsForm } = require('../utils/validate');
const { sendFormEmail } = require('../services/mailer');

const router = Router();

/**
 * POST /api/labs
 * Lab proposal / institutional inquiry.
 */
router.post('/', async (req, res, next) => {
  try {
    if (req.body.website) {
      return res.json({ success: true, message: 'Lab proposal submitted successfully.' });
    }

    const { errors, clean } = validateLabsForm(req.body);
    if (errors) {
      return res.status(422).json({ success: false, message: 'Validation failed', fields: errors });
    }

    const fields = [
      { label: 'Institution', value: clean.institution },
      { label: 'Contact Person', value: clean.name },
      { label: 'Email', value: clean.email },
      { label: 'Phone', value: clean.phone },
      { label: 'Lab Configuration', value: clean.labType },
      { label: 'Additional Requirements', value: clean.message },
    ];

    await sendFormEmail({
      subject: `Lab Proposal Request — ${clean.labType} — ${clean.institution}`,
      fields,
    });

    res.json({ success: true, message: 'Lab proposal submitted successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
