const { Router } = require('express');
const { validateFdpForm } = require('../utils/validate');
const { sendFormEmail } = require('../services/mailer');

const router = Router();

/**
 * POST /api/fdp
 * Faculty Development Program proposal request.
 */
router.post('/', async (req, res, next) => {
  try {
    if (req.body.website) {
      return res.json({ success: true, message: 'FDP request submitted successfully.' });
    }

    const { errors, clean } = validateFdpForm(req.body);
    if (errors) {
      return res.status(422).json({ success: false, message: 'Validation failed', fields: errors });
    }

    const fields = [
      { label: 'Institution', value: clean.institution },
      { label: 'Contact Person', value: clean.name },
      { label: 'Email', value: clean.email },
      { label: 'Phone', value: clean.phone },
      { label: 'Faculty Size', value: clean.facultySize },
    ];

    await sendFormEmail({
      subject: `FDP Proposal Request from ${clean.institution}`,
      fields,
    });

    res.json({ success: true, message: 'FDP request submitted successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
