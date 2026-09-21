import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const ScholarIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 2 1 7.5 12 13l7.5-3.75v5.17c-.86.43-1.5 1.5-1.5 2.58 0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3c0-1.08-.64-2.15-1.5-2.58V8.25L12 2Zm0 13.13L3.6 10.7v2.42c0 2.3 3.76 4.17 8.4 4.17s8.4-1.87 8.4-4.17v-.37L12 15.13Z" />
  </svg>
);

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

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=O8CIQXcAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <ScholarIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Nav links */}
      <div className="space-x-4">
        <Link href="/#experience" className="text-gray-700 hover:text-primary">
          Experience
        </Link>
        <Link href="/#research" className="text-gray-700 hover:text-primary">
          Research
        </Link>
        <Link href="/#service" className="text-gray-700 hover:text-primary">
          Service
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-primary">
          Blog
        </Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
