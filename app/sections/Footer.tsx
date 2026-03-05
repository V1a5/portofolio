import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full px-6 py-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 Muhammad Vlas. All rights reserved.
        </p>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg transition-colors z-50">
        <a
          href="https://wa.me/6285959872110"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </button>
    </footer>
  );
}
