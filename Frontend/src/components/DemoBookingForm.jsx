import React, { useState, useEffect } from "react";
import {
  User, Phone, Mail, BookOpen, GraduationCap,
  Building2, MessageSquare, ArrowUpRight, Loader2, CheckCircle2,
} from "lucide-react";
import { submitForm } from "../utils/submitForm";
import {
  DEMO_BOOKING_ENDPOINT,
  DEMO_BOOKING_DEFAULTS,
  DEMO_COURSE_OPTIONS,
  DEMO_LEVEL_OPTIONS,
} from "../config/demoBooking";

const DemoBookingForm = ({ isOpen, defaultSource = "home", defaultCourse = "", compact = false }) => {
  const [formData, setFormData] = useState({
    ...DEMO_BOOKING_DEFAULTS,
    source: defaultSource,
    courseInterest: defaultCourse,
  });
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setFormError("");
        setFormSuccess("");
        setFieldErrors({});
        setFormData({ ...DEMO_BOOKING_DEFAULTS, source: defaultSource, courseInterest: defaultCourse });
      }, 0);
    }
  }, [isOpen, defaultSource, defaultCourse]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFieldErrors({});
    setFormError("");
    setFormSuccess("");

    const { ok, error, fields } = await submitForm(DEMO_BOOKING_ENDPOINT, formData);
    setSubmitting(false);

    if (ok) {
      setFormSuccess("Demo class booked successfully! Our team will contact you shortly.");
      setFormData({ ...DEMO_BOOKING_DEFAULTS, source: defaultSource, courseInterest: defaultCourse });
    } else if (fields) {
      setFieldErrors(fields);
    } else {
      setFormError(error);
    }
  };

  const inputBase =
    "w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm rounded-xl focus:ring-1 focus:ring-orange-500 focus:border-orange-500 block pl-11 p-4 transition-all outline-none";
  const labelBase = "text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1";

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${compact ? "" : "p-8 md:p-10"}`}>
      {/* Honeypot — hidden from real users, bots auto-fill it */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleInputChange}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="!absolute !left-[-9999px] !opacity-0 !h-0 !w-0"
      />

      {formSuccess && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm text-center flex items-center justify-center gap-2">
          <CheckCircle2 size={16} /> {formSuccess}
        </div>
      )}
      {formError && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
          {formError}
        </div>
      )}

      {/* Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className={labelBase}>Full Name</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User size={16} className="text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className={inputBase}
              placeholder="Student / Parent Name"
            />
          </div>
          {fieldErrors.name && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className={labelBase}>Phone Number</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone size={16} className="text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className={inputBase}
              placeholder="+91"
            />
          </div>
          {fieldErrors.phone && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className={labelBase}>Email Address</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail size={16} className="text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
          </div>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className={inputBase}
            placeholder="email@domain.com"
          />
        </div>
        {fieldErrors.email && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.email}</p>}
      </div>

      {/* Course & Student Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className={labelBase}>Course / Program</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <BookOpen size={16} className="text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <select
              name="courseInterest"
              required
              value={formData.courseInterest}
              onChange={handleInputChange}
              className={`${inputBase} appearance-none`}
            >
              <option value="" disabled>Select a course...</option>
              {DEMO_COURSE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          {fieldErrors.courseInterest && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.courseInterest}</p>}
        </div>

        <div className="space-y-2">
          <label className={labelBase}>Student Level <span className="text-zinc-600">(Optional)</span></label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <GraduationCap size={16} className="text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <select
              name="studentLevel"
              value={formData.studentLevel}
              onChange={handleInputChange}
              className={`${inputBase} appearance-none`}
            >
              <option value="">Select level...</option>
              {DEMO_LEVEL_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          {fieldErrors.studentLevel && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.studentLevel}</p>}
        </div>
      </div>

      {/* Institution (optional) */}
      <div className="space-y-2">
        <label className={labelBase}>School / Institution <span className="text-zinc-600">(Optional)</span></label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Building2 size={16} className="text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
          </div>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleInputChange}
            className={inputBase}
            placeholder="Name of your school or institution"
          />
        </div>
        {fieldErrors.institution && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.institution}</p>}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className={labelBase}>Message</label>
        <div className="relative group">
          <div className="absolute top-4 left-0 pl-4 pointer-events-none">
            <MessageSquare size={16} className="text-zinc-600 group-focus-within:text-orange-500 transition-colors" />
          </div>
          <textarea
            name="message"
            rows={compact ? 3 : 4}
            required
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm rounded-xl focus:ring-1 focus:ring-orange-500 focus:border-orange-500 block pl-11 p-4 transition-all resize-none outline-none"
            placeholder="Any specific requests or preferred schedule..."
          />
        </div>
        {fieldErrors.message && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 mt-2 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Submitting…
          </>
        ) : (
          <>
            Book Free Demo Class
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default DemoBookingForm;
