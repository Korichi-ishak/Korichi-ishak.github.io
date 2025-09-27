import { useState } from "react";
import { MailIcon, SendIcon, CheckCircleIcon, AlertCircleIcon, BriefcaseIcon } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });

  const validateForm = () => {
    const newErrors = {};

    if (!contactForm.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!contactForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(contactForm.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!contactForm.message.trim()) {
      newErrors.message = "Message is required";
    } else if (contactForm.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault(); // cancel submission if validation fails
      setStatus({ type: "error", message: "Please correct the errors above." });
    } else {
      setStatus({ type: "success", message: "Sending message..." });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="COLLABORATE"
          title={<><span className='text-white'>Let’s</span> Talk</>}
          subtitle="Open to freelance, product partnerships & impactful full‑time roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <form
              action="https://formsubmit.co/ishakkorichi09@gmail.com"
              method="POST"
              onSubmit={handleFormSubmit}
              className="space-y-6 bg-[#222224] p-8 rounded-xl shadow-lg border border-white/10"
            >
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={handleChange}
                  required
                  className={`w-full bg-[#2C2C2E] border ${
                    errors.name ? "border-red-500" : "border-[#3E3E40]"
                  } text-white p-3 rounded-lg focus:outline-none focus:border-red-500 transition-all duration-300 placeholder-white/40`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-[#2C2C2E] border ${
                    errors.email ? "border-red-500" : "border-[#3E3E40]"
                  } text-white p-3 rounded-lg focus:outline-none focus:border-red-500 transition-all duration-300 placeholder-white/40`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={contactForm.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full bg-[#2C2C2E] border ${
                    errors.message ? "border-red-500" : "border-[#3E3E40]"
                  } text-white p-3 rounded-lg focus:outline-none focus:border-red-500 transition-all duration-300 placeholder-white/40`}
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {status.type && (
                <div
                  className={`p-3 rounded-lg flex items-center text-sm ${
                    status.type === "success"
                      ? "bg-white/10 text-white"
                      : "bg-red-900/30 text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                  ) : (
                    <AlertCircleIcon className="w-5 h-5 mr-2" />
                  )}
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
              >
                <SendIcon className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Let's Work Together</h3>
            <p className="text-white/80 mb-8">
              Looking for a skilled backend developer or data analyst for your next project?
              I'm currently available for freelance work and open to full-time opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#2C2C2E] p-3 rounded-full mr-4">
                  <MailIcon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a
                    href="mailto:ishakkorichi09@gmail.com"
                    className="text-white/70 hover:text-red-500 transition-colors"
                  >
                    ishakkorichi09@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#2C2C2E] p-3 rounded-full mr-4">
                  <BriefcaseIcon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Work Availability</h4>
                  <p className="text-white/70">
                    Open to freelance projects and full-time opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
