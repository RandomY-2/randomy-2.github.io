import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
      {/* Left: text */}
      <div className="prose lg:prose-lg flex-1 md:max-w-prose">
        <h1 className="font-semibold">Hi, I&apos;m Jiahe 👋</h1>
        <p>
          Software engineer passionate about high-performance data systems. Here I
          share deep dives on databases, systems, and various topics.
        </p>
        <Link href="/blog" className="text-primary underline">
          Read the blog →
        </Link>
      </div>
    </section>
  );
}
