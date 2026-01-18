import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogClient from "./BlogClient";

const postsDirectory = path.join(process.cwd(), "content", "blog");

// Blog categories/types
export const BLOG_CATEGORIES = [
  { value: "all", label: "All Posts" },
  { value: "system-papers", label: "System" },
  { value: "ai", label: "AI" },
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number]["value"];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  categories: string[]; // Array of categories
}

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
