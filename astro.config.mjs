// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// Markdown plugins
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en-US',
                    vi: 'vi-VN',
                },
            },
        }),
        react(),
        tailwind(),
    ],
    build: {
        inlineStylesheets: 'auto',
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'vi'],
        routing: {
            prefixDefaultLocale: true,
            strategy: 'pathname',
        },
    },
    output: 'static',
    compressHTML: true,
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
            langs: [],
        },
        remarkPlugins: [
            // @ts-ignore
            remarkGfm,
            // @ts-ignore
            [
                remarkToc,
                {
                    heading: 'Contents',
                    maxDepth: 3,
                    tight: true,
                },
            ],
            // @ts-ignore
            remarkSmartypants,
        ],
        rehypePlugins: [
            // @ts-ignore
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'append',
                    content: {
                        type: 'element',
                        tagName: 'span',
                        properties: { className: ['anchor-link'] },
                        children: [
                            {
                                type: 'text',
                                value: ' #',
                            },
                        ],
                    },
                },
            ],
            // @ts-ignore
            [
                rehypeExternalLinks,
                {
                    target: '_blank',
                    rel: ['nofollow', 'noopener', 'noreferrer'],
                },
            ],
        ],
    },
})
