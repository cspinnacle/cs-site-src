"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { name: "home", href: "/" },
  { name: "class-info", href: "/class-info/" },
  { name: "articles", href: "/articles/" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-ink/95 backdrop-blur-md border-b border-border-dark"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm text-white font-medium inline-flex items-center">
          cs<span className="text-string">/</span>pinnacle<span className="caret ml-0.5" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`relative z-10 block font-mono text-sm px-3.5 py-1.5 rounded-full transition-colors ${
                      active ? "text-ink" : "text-[#C6D0E4] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-string rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/newsletters/"
            className={`inline-flex items-center px-4 py-1.5 rounded-full border-[1.5px] border-string font-mono text-sm font-medium transition-colors ${
              isActive("/newsletters/")
                ? "bg-string text-ink"
                : "text-string hover:bg-string hover:text-ink"
            }`}
          >
            newsletters
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-0.5 bg-white block origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="w-5 h-0.5 bg-white block"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-0.5 bg-white block origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-ink border-b border-border-dark"
          >
            {[...navigation, { name: "newsletters", href: "/newsletters/" }].map((item, i) => (
              <motion.div
                key={item.href + item.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono text-sm text-[#C6D0E4] border-t border-border-dark first:border-t-0"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
