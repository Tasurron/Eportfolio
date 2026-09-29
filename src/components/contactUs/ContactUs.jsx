import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | unconfigured

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <div className="text-center my-10 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl mb-4">
          Let Us <span className="text-neutral-500">Connect</span>
        </h1>
        <p className="text-neutral-400">
          Have a project in mind or want to talk about a software idea? I'm
          always open to new opportunities and conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto px-4">
        {/* Left: info + socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-cyan-300/30 transition-all duration-300">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 text-xl">
              <MdEmail />
            </div>
            <div>
              <h4 className="font-medium text-neutral-100">Email</h4>
              <a
                href="mailto:tasurron.tn@gmail.com"
                className="text-neutral-400 text-sm hover:text-cyan-300"
              >
                tasurron.tn@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-purple-400/30 transition-all duration-300">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-medium text-neutral-100">Location</h4>
              <p className="text-neutral-400 text-sm">Dhaka, Bangladesh</p>
            </div>
          </div>

        </div>

        {/* Right: form */}
        <div className="lg:col-span-7 w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-sm text-neutral-400 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-5 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white outline-none focus:border-cyan-300/50 transition-all duration-300 placeholder:text-neutral-600"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm text-neutral-400 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white outline-none focus:border-purple-400/50 transition-all duration-300 placeholder:text-neutral-600"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm text-neutral-400 ml-1">Your Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I would like to talk about..."
                className="w-full px-5 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white outline-none focus:border-cyan-300/50 transition-all duration-300 resize-none placeholder:text-neutral-600"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn flex mx-auto px-12 rounded-full bg-cyan-300 text-neutral-900 hover:bg-cyan-200 border-none text-lg disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-400 text-sm">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
            {status === "unconfigured" && (
              <p className="text-center text-yellow-400 text-sm">
                The contact form isn't fully set up yet — please email me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
