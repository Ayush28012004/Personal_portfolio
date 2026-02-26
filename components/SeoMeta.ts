import type { Metadata } from "next";
import type { SiteConfig } from "@/config/types";

type SeoOverrides = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function createSeoMetadata(config: SiteConfig, overrides: SeoOverrides = {}): Metadata {
  const title = overrides.title ?? config.seo.title;
  const description = overrides.description ?? config.seo.description;
  const path = overrides.path ?? "";
  const image = overrides.image ?? config.seo.ogImage;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = path ? `${config.seo.siteUrl}${normalizedPath}` : config.seo.siteUrl;

  return {
    title,
    description,
    metadataBase: new URL(config.seo.siteUrl),
    keywords: config.seo.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: config.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
