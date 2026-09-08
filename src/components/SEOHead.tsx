import { useEffect } from 'react';
import { siteConfig } from '../config/site';

export interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  robots?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  ogType = 'website',
  ogImage,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper to safely set or update meta tag by attribute
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Normalize domain
    const cleanDomain = (siteConfig.domain || 'www.gauravbeniwal.online')
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '');

    // Canonical URL: Trailing slash on root, no trailing slash on subpaths
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `https://${cleanDomain}${cleanPath === '/' ? '/' : cleanPath}`;
    const resolvedOgImage = ogImage || `https://${cleanDomain}/images/profile.jpg`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', robots);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', resolvedOgImage);
    setMetaTag('property', 'og:site_name', 'Gaurav Beniwal — Digital Solutions & Development');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', resolvedOgImage);
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // 5. Dynamic Structured Data (Schema.org JSON-LD)
    const schemaScriptId = 'dynamic-page-schema-jsonld';
    let scriptTag = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = schemaScriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic schema when unmounting page
      const existing = document.getElementById(schemaScriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, robots, ogType, ogImage, structuredData]);

  return null;
}
