import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createSeoMetadata } from "@/components/SeoMeta";
import { siteConfig } from "@/config/site";
import { blogPageContent, blogPostContentBySlug, blogPosts } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return createSeoMetadata(siteConfig, {
      title: "Blog Post",
      description: siteConfig.seo.description,
      path: `/blog/${slug}`,
    });
  }

  return createSeoMetadata(siteConfig, {
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const content = blogPostContentBySlug[slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-12 font-medium text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        {blogPageContent.backToBlogLabel}
      </Link>

      <article className="markdown-body text-[var(--foreground)] space-y-6">
        <ReactMarkdown
          components={{
            h1: (props) => <h1 className="text-4xl font-serif font-medium mb-6" {...props} />,
            h2: (props) => <h2 className="text-2xl font-serif font-medium mt-10 mb-4" {...props} />,
            h3: (props) => <h3 className="text-xl font-serif font-medium mt-8 mb-4" {...props} />,
            p: (props) => <p className="text-[var(--muted-foreground)] leading-relaxed mb-4" {...props} />,
            ul: (props) => <ul className="list-disc list-inside text-[var(--muted-foreground)] mb-4 space-y-2" {...props} />,
            code: (props) => <code className="bg-[var(--muted)] text-[var(--primary)] px-2 py-1 rounded font-mono text-sm" {...props} />,
            pre: (props) => <pre className="bg-[var(--muted)] p-4 rounded-lg overflow-x-auto mb-6" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
