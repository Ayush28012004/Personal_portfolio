export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const blogPageContent = {
  title: "Blog",
  description: "Thoughts, learnings, and tutorials about web development.",
  readMoreLabel: "Read more",
  backToBlogLabel: "Back to Blog",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-portfolio-with-nextjs",
    title: "Building a Portfolio with Next.js App Router",
    date: "2023-10-01",
    excerpt: "Learn how to build a blazing fast portfolio using Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS for Modern Web Design",
    date: "2023-09-15",
    excerpt: "A deep dive into advanced Tailwind CSS techniques for creating responsive and beautiful UIs.",
  },
];

export const blogPostContentBySlug: Record<string, string> = {
  "building-a-portfolio-with-nextjs": `
# Building a Portfolio with Next.js App Router

Welcome to my first blog post! In this article, we'll explore how to build a modern portfolio using Next.js.

## Why Next.js?

Next.js provides an amazing developer experience with features like:
- Server Components
- File-based routing
- Built-in SEO optimization
- Fast page loads

### Code Example

\`\`\`javascript
export default function Page() {
  return <h1>Hello World</h1>
}
\`\`\`

Thanks for reading!
`,
  "mastering-tailwind-css": `
# Mastering Tailwind CSS for Modern Web Design

Tailwind CSS helps you ship polished UI fast. In this post, we cover practical patterns for layout, spacing, and component styling.

## Topics Covered

- Utility-first architecture
- Responsive breakpoints
- Reusable component patterns
- Theming with CSS variables

### Example Utility Stack

\`\`\`html
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
\`\`\`

Happy building!
`,
};
