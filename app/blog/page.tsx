import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export default function BlogIndex() {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const source = fs.readFileSync(path.join(postsDirectory, file));
    const { data } = matter(source);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
    };
  });

  return (
    <div>
      <h1 className="font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-primary underline">
              {title}
            </Link>{" "}
            <span className="text-sm text-gray-500">{date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
