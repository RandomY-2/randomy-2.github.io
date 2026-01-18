"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from "./types";

interface BlogClientProps {
  posts: BlogPost[];
  categories: typeof BLOG_CATEGORIES;
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all");

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.categories.includes(selectedCategory));

  return (
    <div>
      <h1 className="font-bold mb-6 text-2xl md:text-3xl">Blog</h1>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.value
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">No posts found in this category.</p>
      ) : (
        <ul className="space-y-4">
          {filteredPosts.map((post) => {
            const { slug, title, date } = post;
            return (
              <li key={slug} className="border-b border-gray-200 pb-4 last:border-0">
              <Link
                href={`/blog/${slug}`}
                className="text-primary hover:underline text-lg font-medium block mb-1"
              >
                {title}
              </Link>
              <div className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
                <span>{date}</span>
                {post.categories && post.categories.length > 0 && (
                  <>
                    <span>•</span>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 bg-gray-100 rounded text-xs"
                        >
                          {
                            categories.find((c) => c.value === cat)?.label ||
                            cat
                          }
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
