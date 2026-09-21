const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error(
    '[CONFIG ERROR] VITE_API_URL environment variable is not defined! Form submissions will fail. Please set VITE_API_URL in your environment or .env file.'
  );
}

/**
 * Shared form submission helper used by all 5 form components.
 *
 * @param {string}          endpoint   API path, e.g. "/api/contact"
 * @param {Object|FormData} payload    JSON-serialisable object, or FormData for multipart
 * @returns {Promise<{ok:boolean, error:string|null, fields:Object|null}>}
 */
export async function submitForm(endpoint, payload) {
  try {
    const isFormData = payload instanceof FormData;

    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: isFormData ? undefined : { "Content-Type": "application/json" },
      body: isFormData ? payload : JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
      return { ok: true, error: null, fields: null };
    }

    // 422 — validation errors with per-field messages
    if (res.status === 422 && data.fields) {
      return { ok: false, error: data.message || "Validation failed", fields: data.fields };
    }

    // 429, 500, or other server error
    return { ok: false, error: data.message || "Something went wrong. Please try again.", fields: null };
  } catch (_err) {
    return { ok: false, error: "Network error. Please check your connection and try again.", fields: null };
  }
}
