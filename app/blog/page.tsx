import Link from "next/link";
import { createSeoMetadata } from "@/components/SeoMeta";
import { siteConfig } from "@/config/site";
import { blogPageContent, blogPosts } from "@/data/blog";

export const metadata = createSeoMetadata(siteConfig, {
  title: "Blog",
  description: blogPageContent.description,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-[var(--foreground)] mb-4">
          {blogPageContent.title}
        </h1>
        <p className="text-lg text-[var(--muted-foreground)]">{blogPageContent.description}</p>
      </div>

      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="space-y-3">
                <p className="font-mono text-sm text-[var(--primary)]">{post.date}</p>
                <h2 className="text-2xl font-serif font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed">{post.excerpt}</p>
                <div className="text-[var(--primary)] font-medium text-sm flex items-center gap-2 pt-2">
                  {blogPageContent.readMoreLabel} <span className="group-hover:translate-x-1 transition-transform">{">"}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
