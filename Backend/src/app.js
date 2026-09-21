const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const env = require('./config/env');
const { formLimiter } = require('./middleware/rateLimiter');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

// ── Route modules ───────────────────────────────────────────────────
const contactRoute = require('./routes/contact');
const fdpRoute = require('./routes/fdp');
const labsRoute = require('./routes/labs');
const workshopRoute = require('./routes/workshop');
const careersRoute = require('./routes/careers');
const demoRoute = require('./routes/demo');

// ── App ─────────────────────────────────────────────────────────────
const app = express();
app.set('trust proxy', 1);

// ── Security ────────────────────────────────────────────────────────
app.use(helmet());

// ── CORS ────────────────────────────────────────────────────────────
const allowedOrigins = env.SITE_ORIGIN.split(',').map((s) => s.trim());
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  })
);

// ── Body parsing (50 KB limit — the careers route uses multer instead) ──
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// ── Health check ────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── API routes (rate-limited) ───────────────────────────────────────
app.use('/api/contact', formLimiter, contactRoute);
app.use('/api/fdp', formLimiter, fdpRoute);
app.use('/api/labs', formLimiter, labsRoute);
app.use('/api/workshop', formLimiter, workshopRoute);
app.use('/api/careers', formLimiter, careersRoute);
app.use('/api/demo-booking', formLimiter, demoRoute);

// ── Error handling ──────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
