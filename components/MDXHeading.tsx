import { ReactNode } from "react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Extracts text content from React children, handling nested elements
 */
function extractText(children: ReactNode): string {
  if (typeof children === "string") {
    return children;
  }
  if (typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }
  if (children && typeof children === "object" && "props" in children) {
    const childProps = (children as { props: { children?: ReactNode } }).props;
    return extractText(childProps.children ?? "");
  }
  return "";
}

interface HeadingProps {
  children: ReactNode;
}

export function H2({ children }: HeadingProps) {
  const text = extractText(children);
  const id = slugify(text);

  return (
    <h2 id={id} className="scroll-mt-20">
      {children}
    </h2>
  );
}

export function H3({ children }: HeadingProps) {
  const text = extractText(children);
  const id = slugify(text);

  return (
    <h3 id={id} className="scroll-mt-20">
      {children}
    </h3>
  );
}

export function H4({ children }: HeadingProps) {
  const text = extractText(children);
  const id = slugify(text);

  return (
    <h4 id={id} className="scroll-mt-20">
      {children}
    </h4>
  );
}

export function H5({ children }: HeadingProps) {
  const text = extractText(children);
  const id = slugify(text);

  return (
    <h5 id={id} className="scroll-mt-20">
      {children}
    </h5>
  );
}

export function H6({ children }: HeadingProps) {
  const text = extractText(children);
  const id = slugify(text);

  return (
    <h6 id={id} className="scroll-mt-20">
      {children}
    </h6>
  );
}
