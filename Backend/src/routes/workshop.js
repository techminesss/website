const { Router } = require('express');
const { validateWorkshopForm } = require('../utils/validate');
const { sendFormEmail } = require('../services/mailer');

const router = Router();

/**
 * POST /api/workshop
 * Workshop event request from schools.
 */
router.post('/', async (req, res, next) => {
  try {
    if (req.body.website) {
      return res.json({ success: true, message: 'Workshop request submitted successfully.' });
    }

    const { errors, clean } = validateWorkshopForm(req.body);
    if (errors) {
      return res.status(422).json({ success: false, message: 'Validation failed', fields: errors });
    }

    const fields = [
      { label: 'Institution', value: clean.institution },
      { label: 'Coordinator', value: clean.name },
      { label: 'Email', value: clean.email },
      { label: 'Phone', value: clean.phone },
      { label: 'Workshop Topic', value: clean.workshopTopic },
      { label: 'Expected Audience', value: clean.expectedStudents },
    ];

    await sendFormEmail({
      subject: `Workshop Request — ${clean.workshopTopic} — ${clean.institution}`,
      fields,
    });

    res.json({ success: true, message: 'Workshop request submitted successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
