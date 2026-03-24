"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-lg rounded-2xl bg-white p-5 shadow-2xl border border-deep-violet/10 md:left-6 md:right-auto"
          id="cookie-banner"
        >
          <p className="text-sm text-foreground mb-3 leading-relaxed">
            🍪 We use cookies to make your experience magical! By continuing,
            you agree to our use of cookies.
          </p>
          <div className="flex gap-3">
            <button onClick={accept} className="btn-gold text-sm !py-2 !px-4">
              Accept ✨
            </button>
            <button
              onClick={reject}
              className="rounded-full border border-deep-violet/20 px-4 py-2 text-sm font-semibold text-deep-violet transition-colors hover:bg-deep-violet/5 cursor-pointer bg-transparent"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
