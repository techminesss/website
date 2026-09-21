const multer = require('multer');
const path = require('path');
const { MAX_RESUME_SIZE_MB } = require('../config/env');

// ── Whitelist ───────────────────────────────────────────────────────

const ALLOWED_MIMETYPES = [
  'application/pdf',
  'application/msword',                                               // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
];

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

// ── Multer config ───────────────────────────────────────────────────

const storage = multer.memoryStorage();

/**
 * File filter — rejects files that don't match both the extension
 * AND mimetype whitelist.  Throws a custom FILE_TYPE_ERROR that
 * the centralized error handler converts to a 422.
 */
const fileFilter = (_req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const mimeOk = ALLOWED_MIMETYPES.includes(file.mimetype);
  const extOk = ALLOWED_EXTENSIONS.includes(ext);

  if (mimeOk && extOk) {
    return cb(null, true);
  }

  const err = new Error('Only PDF, DOC, and DOCX files are accepted.');
  err.type = 'FILE_TYPE_ERROR';
  return cb(err, false);
};

const resumeUpload = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_RESUME_SIZE_MB * 1024 * 1024 },
});

module.exports = { resumeUpload };
