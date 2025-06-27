// app/blog/[slug]/page.tsx
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";

const postsDir = path.join(process.cwd(), "content", "blog");

export async function generateStaticParams() {
  const files = await fs.readdir(postsDir);
  return files
    .filter((f) => /\.(mdx?|markdown)$/.test(f))
    .map((file) => ({ slug: file.replace(/\.(mdx?|markdown)$/, "") }));
}

export default async function BlogPost({
  params,
}: {
  /** `params` arrives as a Promise ⬇ */
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const source = await fs.readFile(path.join(postsDir, `${slug}.mdx`), "utf8");
    const { content, data } = matter(source);

    return (
      <article className="prose lg:prose-lg mx-auto">
        <h1 className="mb-0">{data.title}</h1>
        <p className="mt-0 text-sm text-gray-500">{data.date}</p>
        <MDXRemote source={content} />
      </article>
    );
  } catch {
    notFound();
  }
}
