const { Router } = require('express');
const { validateContactForm } = require('../utils/validate');
const { sendFormEmail } = require('../services/mailer');

const router = Router();

/**
 * POST /api/contact
 * Official Inquiry Form — routes to the correct department by inquiryType.
 */
router.post('/', async (req, res, next) => {
  try {
    // Honeypot — bots fill hidden "website" field, real users never see it
    if (req.body.website) {
      return res.json({ success: true, message: 'Inquiry submitted successfully.' });
    }

    const { errors, clean } = validateContactForm(req.body);
    if (errors) {
      return res.status(422).json({ success: false, message: 'Validation failed', fields: errors });
    }

    const fields = [
      { label: 'Inquiry Type', value: clean.inquiryType },
      { label: 'Name', value: clean.name },
      { label: 'Institution', value: clean.institution },
      { label: 'Email', value: clean.email },
      { label: 'Phone', value: clean.phone },
      { label: 'Message', value: clean.message },
    ];

    await sendFormEmail({
      subject: `New inquiry (${clean.inquiryType}) from ${clean.name}`,
      fields,
    });

    res.json({ success: true, message: 'Inquiry submitted successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
