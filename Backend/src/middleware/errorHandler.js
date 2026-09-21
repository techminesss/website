const multer = require('multer');

/**
 * 404 handler — mount after all routes.
 */
function notFoundHandler(req, res, _next) {
  res.status(404).json({ success: false, message: 'Route not found' });
}

/**
 * Centralized error handler.
 *
 * - Multer errors → clean 422 responses
 * - Custom FILE_TYPE_ERROR → 422
 * - Everything else → generic 500 (real details logged, never exposed)
 */
function errorHandler(err, req, res, _next) {
  const timestamp = new Date().toISOString();

  // ── Multer errors (file too large, unexpected field, etc.) ──
  if (err instanceof multer.MulterError) {
    const messages = {
      LIMIT_FILE_SIZE: 'File is too large. Please upload a smaller file.',
      LIMIT_UNEXPECTED_FILE: 'Unexpected file field.',
      LIMIT_FILE_COUNT: 'Too many files.',
    };
    console.error(`[${timestamp}] Multer error: ${err.code} — ${err.message}`);
    return res.status(422).json({
      success: false,
      message: messages[err.code] || 'File upload error.',
    });
  }

  // ── Custom file-type rejection (thrown from upload.js filter) ──
  if (err.type === 'FILE_TYPE_ERROR') {
    console.error(`[${timestamp}] File type rejected: ${err.message}`);
    return res.status(422).json({
      success: false,
      message: err.message,
    });
  }

  // ── Everything else ──
  console.error(`[${timestamp}] Unhandled error:`, err);
  res.status(err.status || 500).json({
    success: false,
    message: 'An internal server error occurred. Please try again later.',
  });
}

module.exports = { notFoundHandler, errorHandler };
