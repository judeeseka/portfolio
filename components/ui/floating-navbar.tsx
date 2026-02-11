"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction > 0) setVisible(false);
        else if (direction < 0) setVisible(true);
      }
    }
  });

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navStyle =
    "flex max-w-fit fixed z-[5000] top-4 inset-x-0 mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl border border-white/[0.08] bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-black/20";

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(navStyle, className)}
        >
          {/* Desktop: horizontal links */}
          <div className="hidden md:flex items-center justify-center gap-1 lg:gap-2 min-w-0">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger only */}
          <div className="flex md:hidden w-full justify-between items-center">
            <span className="text-sm font-semibold text-white">Jude</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[4999] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-[5000] w-full max-w-[280px] bg-slate-900 border-l border-slate-800 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <span className="text-sm font-semibold text-white">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-${idx}`}
                    href={navItem.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 font-medium transition-colors"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
