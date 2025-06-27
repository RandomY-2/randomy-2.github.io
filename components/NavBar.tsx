import Link from "next/link";

const NavBar = () => (
  <header className="bg-white border-b sticky top-0 z-50">
    <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
      <Link href="/" className="font-semibold text-lg">Jiahe Yan</Link>
      <div className="space-x-4">
        <Link href="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
        <a href="/resume.pdf" className="text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  </header>
);

export default NavBar;
