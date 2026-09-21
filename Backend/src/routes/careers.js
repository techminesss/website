const { Router } = require('express');
const { validateCareersForm } = require('../utils/validate');
const { sendFormEmail } = require('../services/mailer');
const { resumeUpload } = require('../middleware/upload');

const router = Router();

/**
 * POST /api/careers
 * Job application — multipart/form-data with resume file attachment.
 *
 * Multer is applied directly on this route (not globally) because
 * it's the only endpoint that accepts file uploads.  The file is held
 * in memory (memoryStorage) and base64-encoded for Resend — nothing
 * is written to disk.
 */
router.post('/', resumeUpload.single('resume'), async (req, res, next) => {
  try {
    // Honeypot
    if (req.body.website) {
      return res.json({ success: true, message: 'Application submitted successfully.' });
    }

    // ── Validate text fields ──
    const { errors: validationErrors, clean } = validateCareersForm(req.body);
    const errors = validationErrors || {};

    // ── Validate resume file ──
    if (!req.file) {
      errors.resume = 'Resume file is required (PDF, DOC, or DOCX)';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ success: false, message: 'Validation failed', fields: errors });
    }

    // ── Build email fields ──
    const fields = [
      { label: 'Full Name', value: clean.fullName },
      { label: 'Email', value: clean.email },
      { label: 'Phone', value: clean.phone },
      { label: 'Portfolio / LinkedIn', value: clean.portfolio },
      { label: 'Experience', value: clean.experience },
      { label: 'Cover Note', value: clean.coverNote },
      { label: 'Resume', value: req.file.originalname },
    ];

    // ── Build attachment ──
    const attachments = [
      {
        filename: req.file.originalname,
        content: req.file.buffer,
      },
    ];

    await sendFormEmail({
      subject: `Job Application — ${clean.fullName}`,
      fields,
      attachments,
    });

    res.json({ success: true, message: 'Application submitted successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
