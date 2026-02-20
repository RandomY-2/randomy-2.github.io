export interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * Converts a heading text to a URL-friendly ID
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Extracts headings from markdown/MDX content
 */
export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  const headings: Heading[] = [];
  const matches = Array.from(content.matchAll(headingRegex));

  matches.forEach((match) => {
    const level = match[1].length; // Number of # characters
    const text = match[2].trim();
    const id = slugify(text);

    headings.push({
      id,
      text,
      level,
    });
  });

  return headings;
}
