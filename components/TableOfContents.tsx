"use client";

import { useEffect, useState } from "react";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-8 hidden xl:block max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="border-l border-gray-200 pl-3">
        <h2 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Contents
        </h2>
        <ul className="space-y-0.5">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const indentClass =
              heading.level === 2
                ? "pl-0"
                : heading.level === 3
                ? "pl-3"
                : heading.level === 4
                ? "pl-6"
                : "pl-9";

            return (
              <li key={heading.id} className={indentClass}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(heading.id);
                    if (element) {
                      const offset = 80; // Account for sticky header if any
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`block text-xs transition-colors py-0.5 leading-snug ${
                    isActive
                      ? "text-primary font-medium border-l-2 border-primary -ml-3 pl-2"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
