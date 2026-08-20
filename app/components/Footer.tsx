import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#9AA8C4] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-mono text-sm text-white mb-4">cs/pinnacle</h4>
            <p className="text-sm max-w-xs">
              The class hub for Computer Science at Pinnacle Academy — Grades
              6 through 11.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-sm text-white mb-4">Site</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/class-info/" className="hover:text-white">Class Info</Link></li>
              <li><Link href="/newsletters/" className="hover:text-white">Newsletters</Link></li>
              <li><Link href="/articles/" className="hover:text-white">Articles</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm text-white mb-4">Contact</h4>
            <p className="text-sm">
              <a href="mailto:#" className="hover:text-white">
                [Insert School Email Address]
              </a>
            </p>
            <p className="text-sm mt-2">Computer Lab &middot; Pinnacle Academy</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border-dark flex flex-wrap justify-between gap-2 font-mono text-xs text-comment">
          <span>&copy; 2026&ndash;2027 CS @ Pinnacle Academy</span>
          <span>Updated August 2026</span>
        </div>
      </div>
    </footer>
  );
}
