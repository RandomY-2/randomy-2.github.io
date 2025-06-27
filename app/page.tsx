import Link from "next/link";

export default function HomePage() {
  return (
    <section className="prose lg:prose-lg">
      <h1 className="font-semibold">Hi, I’m Jiahe 👋</h1>
      <p>
        Software engineer passionate about high‑performance data systems.
        Here I share deep dives on databases, systems, and various topics.
      </p>
      <Link href="/blog" className="text-primary underline">
        Read the blog →
      </Link>
    </section>
  );
}
