const { Router } = require('express');
const { validateDemoBookingForm } = require('../utils/validate');
const { sendFormEmail } = require('../services/mailer');

const router = Router();

/**
 * POST /api/demo-booking
 * Book a Free Demo Class — sends booking details to the team.
 */
router.post('/', async (req, res, next) => {
  try {
    // Honeypot — bots fill hidden "website" field, real users never see it
    if (req.body.website) {
      return res.json({ success: true, message: 'Demo request submitted successfully.' });
    }

    const { errors, clean } = validateDemoBookingForm(req.body);
    if (errors) {
      return res.status(422).json({ success: false, message: 'Validation failed', fields: errors });
    }

    const fields = [
      { label: 'Source', value: clean.source },
      { label: 'Name', value: clean.name },
      { label: 'Email', value: clean.email },
      { label: 'Phone', value: clean.phone },
      { label: 'Course Interest', value: clean.courseInterest },
      { label: 'Student Level', value: clean.studentLevel },
      { label: 'Institution', value: clean.institution },
      { label: 'Message', value: clean.message },
    ];

    await sendFormEmail({
      subject: `New demo booking request from ${clean.name}`,
      fields,
    });

    res.json({ success: true, message: 'Demo request submitted successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
