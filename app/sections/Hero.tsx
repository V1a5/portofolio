"use client";

import { Download, Monitor, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 items-center">
        {/* bg blur radial */}
        <div className="absolute pointer-events-none">
          <div className="absolute right-[-600] bottom-50 lg:bottom-[-10] lg:right-[-850] w-80 h-80 lg:w-[500px] lg:h-[500px] bg-radial-top rounded-full blur-2xl opacity-15"></div>
          <div className="absolute top-[-400px] lg:top-[-200] lg:left-[-80] w-80 h-80 lg:w-[700px] lg:h-[400px] bg-radial-left rounded-full blur-2xl opacity-15"></div>
        </div>
        {/* Left Content */}
        <div className="space-y-6">
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-600">
              Available for work
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I&apos;m
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text">
              Muhammad Vlas
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            an
            aspiring Software
            Engineer exploring Web
            Development & UI/UX
            Design.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="/CV Muhammad Vlas.pdf"
              download
              className="gradient-button hover:opacity-90 text-white rounded-full px-6 py-3 flex items-center gap-2 text-sm font-medium transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="rounded-full px-6 py-3 border border-gray-300 hover:bg-gray-50 text-sm font-medium transition-colors"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 pb-4 flex-row">
            {/* GitHub */}
            <a
              href="https://github.com/v1a5"
              className="flex h-12 w-12 items-center justify-center rounded-full gradient-button shadow-4xl transition-transform hover:scale-105 active:scale-95"
            >
              {/* SVG GitHub */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                target="_blank"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 1.8 2.9 1.3.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/muhammadvlas"
              className="flex h-12 w-12 items-center justify-center rounded-full gradient-button shadow-2xl transition-transform hover:scale-105 active:scale-95"
            >
              {/* SVG LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                target="_blank"
                viewBox="0 1 21 24"
                className="h-6 w-6"
              >
                <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.9c0-1.9-.1-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/vlas1.1"
              className="flex h-12 w-12 items-center justify-center rounded-full gradient-button shadow-2xl transition-transform hover:scale-105 active:scale-95"
            >
              {/* SVG Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                target="_blank"
                viewBox="0 0 23 25"
                className="h-6 w-6"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.4 4 0.7c-.8.3-1.5.7-2.2 1.4-.7.7-1.1 1.4-1.4 2.2-.3.7-.5 1.7-.6 3-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.3 2.3.6 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.7.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.3-.3 3-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.7.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.6-3-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.7-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0z" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center bg lg:justify-center">
          <div className="relative bg-white rounded-3xl">
            {/* Profile Image */}
            <div className="absolute -top-10 -right-10 w-30 h-30 bg-radial-top-right rounded-full blur-xl opacity-40"></div>
            <div className="absolute -bottom-10 -left-10 w-30 h-30 bg-radial-bottom-left blur-xl rounded-full opacity-40"></div>


            <div className="w-[320px] h-[420px] lg:w-[380px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/pp-Photoroom.png"
                alt="Muhammad Vlas"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Expertise Badge - Top */}
            <div className="absolute -top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Expertise</p>
                <p className="text-sm font-semibold text-gray-900">Web Developer</p>
              </div>
            </div>

            {/* Skill Badge - Bottom */}
            <div className="absolute -bottom-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Skill</p>
                <p className="text-sm font-semibold text-gray-900">
                  Next.js & Tailwind
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
