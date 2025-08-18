import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  // Replace with your deployed Apps Script Web App URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzRaihDRlSTsYQQx09jGcoz5_l4HUH5FEk_oCmNfoZW98s5j4rHqBLrc0IICxk4rML3hQ/exec";

  const onSubmit = async (e) => {
  e.preventDefault();
  setStatus({ sending: true, ok: null, msg: "" });

  const form = e.currentTarget;
  const formData = new FormData(form);

  // Convert FormData → URLSearchParams (works with Apps Script e.parameter)
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    params.append(key, value);
  }

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      body: params, // sends as x-www-form-urlencoded
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    form.reset();
    setStatus({ sending: false, ok: true, msg: "Thanks! Your message was sent." });
  } catch (err) {
    console.error(err);
    setStatus({
      sending: false,
      ok: false,
      msg: "Sorry—something went wrong. Please email me directly.",
    });
  }
};

  return (
    <section className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Contact — Rupesh</title>
        <meta
          name="description"
          content="Contact Rupesh for research collaborations, ML consulting, freelance or full-time opportunities."
        />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Connect with me</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            I’m open to research collaborations and roles spanning AI, Trustworthy ML, and Security.
          </p>

          <p className="text-slate-700 dark:text-slate-200">
            📧 :{" "}
            <a href="mailto:rupeshghimire17@gmail.com" className="text-primary hover:underline">
              Email 
            </a>
          </p>

          <p className="mt-3 text-slate-700 dark:text-slate-200">
            💼 :{" "}
            <a
              href="https://linkedin.com/in/rupesh-ghimire7"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </p>

          <p className="mt-3 text-slate-700 dark:text-slate-200">
            🐙 :{" "}
            <a
              href="https://github.com/rupeshghimire7"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </p>

          <p className="mt-3 text-slate-700 dark:text-slate-200">
            ✍️ :{" "}
            <a
              href="https://medium.com/@rupeshghimire7"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Medium
            </a>
          </p>

          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm">
            I love to work on new ideas and projects. Feel free to reach out via Email, LinkedIn, or the
            message form.
          </p>
        </div>

        {/* Right: Form → Google Sheets */}
        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-white/70 dark:bg-slate-800/60 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 backdrop-blur"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-sm mb-1 text-slate-700 dark:text-slate-300">Name</span>
              <input
                name="name"
                required
                placeholder="Your full name"
                className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600
                           bg-white dark:bg-slate-900
                           text-slate-900 dark:text-slate-100
                           placeholder-slate-400 dark:placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>
            <label className="block">
              <span className="block text-sm mb-1 text-slate-700 dark:text-slate-300">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600
                           bg-white dark:bg-slate-900
                           text-slate-900 dark:text-slate-100
                           placeholder-slate-400 dark:placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>
          </div>

          <label className="block">
            <span className="block text-sm mb-1 text-slate-700 dark:text-slate-300">Subject</span>
            <input
              name="subject"
              required
              placeholder="Subject of the Message"
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600
                         bg-white dark:bg-slate-900
                         text-slate-900 dark:text-slate-100
                         placeholder-slate-400 dark:placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>

          <label className="block">
            <span className="block text-sm mb-1 text-slate-700 dark:text-slate-300">Message</span>
            <textarea
              name="message"
              rows="6"
              required
              placeholder="How can I help?"
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600
                         bg-white dark:bg-slate-900
                         text-slate-900 dark:text-slate-100
                         placeholder-slate-400 dark:placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>

          {/* Spam honeypot */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status.sending}
              className="px-5 py-3 rounded-xl bg-primary text-white font-medium shadow hover:opacity-90 transition disabled:opacity-60"
            >
              {status.sending ? "Sending..." : "Send Message"}
            </button>
            {status.msg && (
              <span
                className={`text-sm ${
                  status.ok ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {status.msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
