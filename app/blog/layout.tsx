import { ReactNode } from "react";

export const metadata = {
  title: "Blog | Jiahe Yan",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="prose lg:prose-lg mx-auto">
      {children}
    </section>
  );
}
