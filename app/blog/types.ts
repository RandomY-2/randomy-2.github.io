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
