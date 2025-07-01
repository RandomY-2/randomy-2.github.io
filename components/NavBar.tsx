import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const NavBar = () => (
  <header className="bg-white border-b sticky top-0 z-50 backdrop-blur">
    <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
      {/* Brand + Social */}
      <div className="flex items-center gap-6">
        {/* Name */}
        <Link href="/" className="font-semibold text-lg">
          Jiahe Yan
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/RandomY-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jiahe-yan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-[#0A66C2] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Nav links */}
      <div className="space-x-4">
        <Link href="/blog" className="text-gray-700 hover:text-primary">
          Blog
        </Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
