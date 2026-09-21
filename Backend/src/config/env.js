const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// ── Required variables ──────────────────────────────────────────────
const REQUIRED = ['RESEND_API_KEY', 'MAIL_FROM', 'MAIL_TO', 'SITE_ORIGIN'];

const missing = REQUIRED.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(
    `\n❌  Missing required environment variables:\n` +
      `   ${missing.join(', ')}\n\n` +
      `   Copy .env.example → .env and fill in the values.\n`
  );
  process.exit(1);
}

// ── Exported config ─────────────────────────────────────────────────
module.exports = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_TO: process.env.MAIL_TO,
  SITE_ORIGIN: process.env.SITE_ORIGIN,
  PORT: parseInt(process.env.PORT, 10) || 4000,
  MAX_RESUME_SIZE_MB: parseInt(process.env.MAX_RESUME_SIZE_MB, 10) || 5,
};
