/**
 * Mailer service — one generic function used by all 5 form routes.
 *
 * Each route builds its own ordered `fields` array of {label, value}
 * pairs and passes them here.  This module owns the HTML template,
 * escaping, and the Resend API call.
 */

const { Resend } = require('resend');
const { RESEND_API_KEY, MAIL_FROM, MAIL_TO } = require('../config/env');
const { escapeHtml } = require('../utils/validate');

const resend = new Resend(RESEND_API_KEY);

// ── HTML builder ────────────────────────────────────────────────────

/**
 * Escape a field value and convert newlines to <br> for HTML display.
 */
function formatValue(val) {
  return escapeHtml(val).replace(/\n/g, '<br>');
}

/**
 * Build a clean, professional HTML email body from field pairs.
 * Empty optional fields are silently omitted from the rendered table.
 *
 * @param {{label:string, value:string}[]} fields
 * @returns {string} Full HTML document string
 */
function buildHtmlBody(fields) {
  const rows = fields
    .filter((f) => f.value)                          // skip empty optional fields
    .map(
      (f) => `
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#374151;
                     white-space:nowrap;vertical-align:top;
                     border-bottom:1px solid #e5e7eb;width:160px;">
            ${escapeHtml(f.label)}
          </td>
          <td style="padding:12px 16px;color:#111827;
                     border-bottom:1px solid #e5e7eb;">
            ${formatValue(f.value)}
          </td>
        </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
             style="background:#ffffff;border-radius:12px;overflow:hidden;
                    box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a5f,#2563eb);
                     padding:28px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:700;
                       letter-spacing:0.3px;">
              TechMines &mdash; New Submission
            </h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:24px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rows}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;background:#f9fafb;color:#6b7280;
                     font-size:12px;text-align:center;
                     border-top:1px solid #e5e7eb;">
            Sent via TechMines Contact System &bull; ${new Date().toISOString()}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Build a clean, plain text email body from field pairs (line-by-line field:value format).
 * Empty optional fields are omitted.
 *
 * @param {{label:string, value:string}[]} fields
 * @returns {string} Plain text email body
 */
function buildTextBody(fields) {
  return fields
    .filter((f) => f.value)
    .map((f) => `${f.label}: ${f.value}`)
    .join('\n');
}

// ── Send function ───────────────────────────────────────────────────

/**
 * Send a form email via Resend.
 *
 * @param {Object}   opts
 * @param {string}   opts.subject                      Email subject line (plain text)
 * @param {{label:string, value:string}[]} opts.fields  Ordered field pairs
 * @param {Object}   [opts.data]                       Form submission data (optional, e.g. { email })
 * @param {string}   [opts.reply_to]                   Direct reply-to email address
 * @param {{filename:string, content:Buffer}[]} [opts.attachments]  File attachments
 * @returns {Promise<Object>} Resend API response data
 */
async function sendFormEmail({ subject, fields, attachments, data: formData, reply_to, replyTo }) {
  const replyEmail = reply_to || replyTo || formData?.email || fields?.find((f) => f.label.toLowerCase() === 'email')?.value;

  const payload = {
    from: MAIL_FROM,
    to: MAIL_TO.split(',').map((s) => s.trim()),
    subject,
    text: buildTextBody(fields),
    html: buildHtmlBody(fields),
  };

  if (replyEmail) {
    payload.reply_to = replyEmail;
  }

  if (attachments?.length) {
    payload.attachments = attachments.map((a) => ({
      filename: a.filename,
      content: a.content.toString('base64'),
    }));
  }

  const { data, error } = await resend.emails.send(payload);

  if (error) {
    throw new Error(`Resend API error: ${error.message}`);
  }

  return data;
}

module.exports = { sendFormEmail };
