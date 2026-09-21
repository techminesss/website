const rateLimit = require('express-rate-limit');

/**
 * Shared rate limiter for all form submission endpoints.
 * 5 requests per IP per 15-minute window.
 */
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions from this IP. Please try again in 15 minutes.',
  },
});

module.exports = { formLimiter };
