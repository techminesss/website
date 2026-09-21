# TechMines — Backend API

Production-grade Express 5 backend that receives form submissions from the TechMines React frontend and sends formatted emails via [Resend](https://resend.com).

## Endpoints

| Method | Path             | Content-Type          | Purpose                         |
|--------|------------------|-----------------------|---------------------------------|
| GET    | `/api/health`    | —                     | Health check                    |
| POST   | `/api/contact`   | `application/json`    | General inquiry form            |
| POST   | `/api/fdp`       | `application/json`    | FDP proposal request            |
| POST   | `/api/labs`      | `application/json`    | Lab proposal / institutional    |
| POST   | `/api/workshop`  | `application/json`    | Workshop event request          |
| POST   | `/api/careers`   | `multipart/form-data` | Job application (with resume)   |

All POST endpoints are rate-limited to **5 requests per IP per 15 minutes**.

---

## Local Setup

### 1. Install dependencies

```bash
cd Backend
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and fill in your values:

| Variable           | Required | Default | Description                                                     |
|--------------------|----------|---------|-----------------------------------------------------------------|
| `RESEND_API_KEY`   | ✅       | —       | Your Resend API key ([get one here](https://resend.com/api-keys)) |
| `MAIL_FROM`        | ✅       | —       | Verified sender address (e.g. `TechMines <noreply@yourdomain.com>`) |
| `MAIL_TO`          | ✅       | —       | Recipient email(s), comma-separated for multiple                |
| `SITE_ORIGIN`      | ✅       | —       | Allowed CORS origin(s), comma-separated (e.g. `http://localhost:5173,https://techmines.in`) |
| `PORT`             | ❌       | `4000`  | Server port                                                     |
| `MAX_RESUME_SIZE_MB` | ❌     | `5`     | Max resume upload size in MB                                    |

### 3. Run in development

```bash
npm run dev
```

The server starts at `http://localhost:4000` with automatic restart on file changes (`node --watch`).

### 4. Run in production

```bash
npm start
```

---

## Render Deployment

| Setting         | Value            |
|-----------------|------------------|
| **Root Directory** | `Backend`     |
| **Build Command**  | `npm install` |
| **Start Command**  | `npm start`   |

Set all required environment variables in Render's dashboard under **Environment**.

Make sure `SITE_ORIGIN` includes your production frontend URL.

---

## curl Examples

### Health Check

```bash
curl http://localhost:4000/api/health
```

### Contact Form

```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:5173" \
  -d '{
    "inquiryType": "student_admission",
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "phone": "+91 98765 43210",
    "message": "I am interested in enrolling for the summer batch."
  }'
```

### FDP Proposal

```bash
curl -X POST http://localhost:4000/api/fdp \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:5173" \
  -d '{
    "institution": "DAV Model School",
    "name": "Dr. Priya Singh",
    "email": "priya@davschool.edu",
    "phone": "+91 98765 43211",
    "facultySize": "25-50"
  }'
```

### Lab Proposal

```bash
curl -X POST http://localhost:4000/api/labs \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:5173" \
  -d '{
    "institution": "St. Xavier School",
    "name": "Amit Verma",
    "email": "amit@xavier.edu",
    "phone": "+91 98765 43212",
    "labType": "ATAL Tinkering Lab",
    "message": "We have a 600 sq ft room available."
  }'
```

### Workshop Request

```bash
curl -X POST http://localhost:4000/api/workshop \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:5173" \
  -d '{
    "institution": "Modern Public School",
    "name": "Neha Kapoor",
    "email": "neha@modernschool.edu",
    "phone": "+91 98765 43213",
    "workshopTopic": "Generative AI",
    "expectedStudents": "100-250"
  }'
```

### Job Application (multipart with resume)

```bash
curl -X POST http://localhost:4000/api/careers \
  -H "Origin: http://localhost:5173" \
  -F "fullName=Arjun Mehta" \
  -F "email=arjun@example.com" \
  -F "phone=+91 98765 43214" \
  -F "portfolio=https://github.com/arjunmehta" \
  -F "experience=2 Years" \
  -F "resume=@./path/to/resume.pdf" \
  -F "coverNote=I am excited to contribute to TechMines."
```

---

## Error Responses

All errors follow a consistent shape:

```json
{
  "success": false,
  "message": "Validation failed",
  "fields": {
    "email": "Invalid email address",
    "phone": "Phone must be 7–20 characters"
  }
}
```

| Status | Meaning                                      |
|--------|----------------------------------------------|
| `200`  | Success                                      |
| `404`  | Route not found                              |
| `422`  | Validation error (check `fields` for details)|
| `429`  | Rate limit exceeded                          |
| `500`  | Internal server error (details logged only)  |

---

## Project Structure

```
Backend/
├── server.js                   ← Entry point
├── .env.example                ← Environment variable template
├── package.json
└── src/
    ├── app.js                  ← Express app (middleware + routes)
    ├── config/
    │   └── env.js              ← Env validation + export
    ├── middleware/
    │   ├── rateLimiter.js      ← 5 req / 15 min per IP
    │   ├── errorHandler.js     ← 404 + centralized error handler
    │   └── upload.js           ← Multer (memoryStorage, resume only)
    ├── routes/
    │   ├── contact.js          ← POST /api/contact
    │   ├── fdp.js              ← POST /api/fdp
    │   ├── labs.js             ← POST /api/labs
    │   ├── workshop.js         ← POST /api/workshop
    │   └── careers.js          ← POST /api/careers (multipart)
    ├── services/
    │   └── mailer.js           ← Generic email sender via Resend
    └── utils/
        └── validate.js         ← Per-form validators + escapeHtml
```
