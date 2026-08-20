"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { name: "class-info", href: "/class-info/" },
  { name: "articles", href: "/articles/" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="fixed top-4 inset-x-4 md:inset-x-8 z-50">
      <div className="max-w-6xl mx-auto relative">
        <nav className="bg-paper/95 backdrop-blur-sm rounded-full shadow-[0_8px_30px_-4px_rgba(22,35,61,0.18)] border border-border px-5 py-2.5 flex items-center justify-between">
          <Link href="/" className="font-mono text-sm text-ink font-medium inline-flex items-center">
            cs<span className="text-string">/</span>pinnacle<span className="caret ml-0.5" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-sm transition-colors ${
                        active ? "text-ink font-semibold" : "text-text-soft hover:text-ink"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/newsletters/"
              className="inline-flex items-center px-4 py-2 rounded-full bg-ink text-white text-sm font-semibold hover:-translate-y-0.5 transition-transform"
            >
              Newsletters
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/newsletters/"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-ink text-white text-sm font-semibold"
            >
              Newsletters
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] shrink-0"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-4.5 h-0.5 bg-ink block origin-center"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="w-4.5 h-0.5 bg-ink block"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-4.5 h-0.5 bg-ink block origin-center"
              />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full inset-x-0 mt-2 bg-paper rounded-2xl shadow-[0_8px_30px_-4px_rgba(22,35,61,0.18)] border border-border overflow-hidden"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 text-sm border-t border-border first:border-t-0 ${
                    isActive(item.href) ? "text-ink font-semibold" : "text-text-soft"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
