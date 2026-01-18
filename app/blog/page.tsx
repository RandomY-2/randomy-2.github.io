import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogClient from "./BlogClient";
import { BLOG_CATEGORIES, type BlogPost } from "./types";

const postsDirectory = path.join(process.cwd(), "content", "blog");

function getBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data } = matter(source);

      // Support both 'category' (single, for backward compatibility) and 'categories' (array)
      let categories: string[] = [];
      if (data.categories) {
        categories = Array.isArray(data.categories) ? data.categories : [data.categories];
      } else if (data.category) {
        categories = Array.isArray(data.category) ? data.category : [data.category];
      } else {
        categories = ["system-papers"]; // Default to system-papers for backward compatibility
      }

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        categories,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function BlogIndex() {
  const posts = getBlogPosts();

  return <BlogClient posts={posts} categories={BLOG_CATEGORIES} />;
}
