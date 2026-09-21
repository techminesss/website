/**
 * Shared validation utilities for all form endpoints.
 *
 * Each per-form validator returns:
 *   { errors: null | {field→message}, clean: {field→trimmedValue} }
 *
 * Values in `clean` are trimmed but NOT HTML-escaped — the mailer
 * applies escapeHtml when interpolating into the HTML body.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-]+$/;
const URL_RE = /^https?:\/\/.+/i;

// ── Helpers ─────────────────────────────────────────────────────────

/** Escape HTML special characters to prevent XSS in email bodies. */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Trim a value, return empty string if falsy. */
function sanitize(val) {
  if (val == null) return '';
  return String(val).trim();
}

/** Validate a required string field within a min–max length range. */
function requireString(val, min, max, label) {
  const s = sanitize(val);
  if (!s) return `${label} is required`;
  if (s.length < min) return `${label} must be at least ${min} characters`;
  if (s.length > max) return `${label} must be at most ${max} characters`;
  return null;
}

function validateEmail(val) {
  const s = sanitize(val);
  if (!s) return 'Email is required';
  if (s.length > 254) return 'Email must be at most 254 characters';
  if (!EMAIL_RE.test(s)) return 'Invalid email address';
  return null;
}

function validatePhone(val) {
  const s = sanitize(val);
  if (!s) return 'Phone number is required';
  if (s.length < 7 || s.length > 20) return 'Phone must be 7–20 characters';
  if (!PHONE_RE.test(s)) return 'Phone may only contain digits, spaces, +, and -';
  return null;
}

function validateOptionalText(val, max, label) {
  const s = sanitize(val);
  if (s && s.length > max) return `${label} must be at most ${max} characters`;
  return null;
}

function validateUrl(val, label) {
  const s = sanitize(val);
  if (!s) return null; // optional — empty is fine
  if (!URL_RE.test(s)) return `${label} must be a valid URL (https://…)`;
  return null;
}

/** Collect errors into an object; return null when empty, object when not. */
function collectErrors(obj) {
  return Object.keys(obj).length ? obj : null;
}

// ── Per-form validators ─────────────────────────────────────────────

function validateContactForm(body) {
  const errors = {};
  const INQUIRY_TYPES = [
    'student_admission',
    'school_partnership',
    'careers',
    'press_media',
    'other',
  ];

  const inquiryType = sanitize(body.inquiryType);
  if (!inquiryType || !INQUIRY_TYPES.includes(inquiryType)) {
    errors.inquiryType = 'Select a valid inquiry type';
  }

  const nameErr = requireString(body.name, 2, 100, 'Name');
  if (nameErr) errors.name = nameErr;

  // Institution is required only when type is school_partnership
  if (inquiryType === 'school_partnership') {
    const instErr = requireString(body.institution, 2, 100, 'Institution');
    if (instErr) errors.institution = instErr;
  }

  const emailErr = validateEmail(body.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(body.phone);
  if (phoneErr) errors.phone = phoneErr;

  const msgErr = requireString(body.message, 2, 5000, 'Message');
  if (msgErr) errors.message = msgErr;

  return {
    errors: collectErrors(errors),
    clean: {
      inquiryType: sanitize(body.inquiryType),
      name: sanitize(body.name),
      institution: sanitize(body.institution),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      message: sanitize(body.message),
    },
  };
}

function validateFdpForm(body) {
  const errors = {};
  const FACULTY_SIZES = ['10-25', '25-50', '50-100', '100+'];

  const instErr = requireString(body.institution, 2, 100, 'Institution');
  if (instErr) errors.institution = instErr;

  const nameErr = requireString(body.name, 2, 100, 'Name');
  if (nameErr) errors.name = nameErr;

  const emailErr = validateEmail(body.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(body.phone);
  if (phoneErr) errors.phone = phoneErr;

  const facultySize = sanitize(body.facultySize);
  if (!facultySize || !FACULTY_SIZES.includes(facultySize)) {
    errors.facultySize = 'Select a valid faculty size';
  }

  return {
    errors: collectErrors(errors),
    clean: {
      institution: sanitize(body.institution),
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      facultySize: sanitize(body.facultySize),
    },
  };
}

function validateLabsForm(body) {
  const errors = {};

  const instErr = requireString(body.institution, 2, 100, 'Institution');
  if (instErr) errors.institution = instErr;

  const nameErr = requireString(body.name, 2, 100, 'Name');
  if (nameErr) errors.name = nameErr;

  const emailErr = validateEmail(body.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(body.phone);
  if (phoneErr) errors.phone = phoneErr;

  // labType: accept any non-empty string (don't hardcode options)
  const labErr = requireString(body.labType, 1, 200, 'Lab type');
  if (labErr) errors.labType = labErr;

  const msgErr = validateOptionalText(body.message, 5000, 'Message');
  if (msgErr) errors.message = msgErr;

  return {
    errors: collectErrors(errors),
    clean: {
      institution: sanitize(body.institution),
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      labType: sanitize(body.labType),
      message: sanitize(body.message),
    },
  };
}

function validateWorkshopForm(body) {
  const errors = {};
  const STUDENT_SIZES = ['50-100', '100-250', '250-500', '500+'];

  const instErr = requireString(body.institution, 2, 100, 'Institution');
  if (instErr) errors.institution = instErr;

  const nameErr = requireString(body.name, 2, 100, 'Name');
  if (nameErr) errors.name = nameErr;

  const emailErr = validateEmail(body.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(body.phone);
  if (phoneErr) errors.phone = phoneErr;

  const topicErr = requireString(body.workshopTopic, 1, 200, 'Workshop topic');
  if (topicErr) errors.workshopTopic = topicErr;

  const expectedStudents = sanitize(body.expectedStudents);
  if (!expectedStudents || !STUDENT_SIZES.includes(expectedStudents)) {
    errors.expectedStudents = 'Select a valid audience size';
  }

  return {
    errors: collectErrors(errors),
    clean: {
      institution: sanitize(body.institution),
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      workshopTopic: sanitize(body.workshopTopic),
      expectedStudents: sanitize(body.expectedStudents),
    },
  };
}

function validateCareersForm(body) {
  const errors = {};

  const nameErr = requireString(body.fullName, 2, 100, 'Full name');
  if (nameErr) errors.fullName = nameErr;

  const emailErr = validateEmail(body.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(body.phone);
  if (phoneErr) errors.phone = phoneErr;

  const urlErr = validateUrl(body.portfolio, 'Portfolio URL');
  if (urlErr) errors.portfolio = urlErr;

  const expErr = validateOptionalText(body.experience, 5000, 'Experience');
  if (expErr) errors.experience = expErr;

  const noteErr = validateOptionalText(body.coverNote, 5000, 'Cover note');
  if (noteErr) errors.coverNote = noteErr;

  return {
    errors: collectErrors(errors),
    clean: {
      fullName: sanitize(body.fullName),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      portfolio: sanitize(body.portfolio),
      experience: sanitize(body.experience),
      coverNote: sanitize(body.coverNote),
    },
  };
}

function validateDemoBookingForm(body) {
  const errors = {};

  const nameErr = requireString(body.name, 2, 100, 'Name');
  if (nameErr) errors.name = nameErr;

  const emailErr = validateEmail(body.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(body.phone);
  if (phoneErr) errors.phone = phoneErr;

  const sourceErr = requireString(body.source, 1, 200, 'Source');
  if (sourceErr) errors.source = sourceErr;

  const courseErr = requireString(body.courseInterest, 1, 200, 'Course interest');
  if (courseErr) errors.courseInterest = courseErr;

  const msgErr = requireString(body.message, 2, 2000, 'Message');
  if (msgErr) errors.message = msgErr;

  const instErr = validateOptionalText(body.institution, 200, 'Institution');
  if (instErr) errors.institution = instErr;

  const levelErr = validateOptionalText(body.studentLevel, 200, 'Student level');
  if (levelErr) errors.studentLevel = levelErr;

  return {
    errors: collectErrors(errors),
    clean: {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      source: sanitize(body.source),
      courseInterest: sanitize(body.courseInterest),
      message: sanitize(body.message),
      institution: sanitize(body.institution),
      studentLevel: sanitize(body.studentLevel),
    },
  };
}

module.exports = {
  escapeHtml,
  validateContactForm,
  validateFdpForm,
  validateLabsForm,
  validateWorkshopForm,
  validateCareersForm,
  validateDemoBookingForm,
};
