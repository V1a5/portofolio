"use client";

import { Phone, Mail, Instagram, Send, Target } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+62 859-59887-2110",
    href: "https://wa.me/6285959872110",
    Target: "_blank",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Mail,
    label: "Email",
    value: "vlasmamokiak@gmail.com",
    href: "mailto:vlasmamokiak@gmail.com",
    Target: "_blank",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@vlas1.1",
    href: "https://instagram.com/vlas1.1",
    Target: "_blank",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    company: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.company) {
      console.log("Bot detected");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address");
      setIsLoading(false);
      return;
    }

    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully! 🚀");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "General Inquiry",
          message: "",
          company: "",
        });
      } else {
        toast.error("Failed to send email ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending email ⚠️");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
              <span className="gradient-button rounded-full px-6 py-3 text-sm font-medium text-white">Get in Touch</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Let&apos;s build something
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6 leading-tight">
              amazing together
            </h2>

            <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
              I&apos;m currently available for freelance projects and internships. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="company"
                style={{ display: "none" }}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
              {/* Name Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Freelance Opportunity</option>
                    <option>Internship</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full gradient-button hover:opacity-90 text-white rounded-full px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}