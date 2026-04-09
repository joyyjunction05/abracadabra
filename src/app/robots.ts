import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'OAI-SearchBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://aabracadabrrahh.com/sitemap.xml',
  };
}
