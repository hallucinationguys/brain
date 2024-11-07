---
title: 'Hello World'
description: 'Welcome to my multilingual blog with enhanced markdown features'
pubDate: '2024-05-11'
lang: 'en'
tags:
    - 'i18n'
    - 'astro'
    - 'web-development'
    - 'multilingual'
authors:
    - 'datnguyennnx'
short_title: 'Ggwp world'
---

## Introduction

This blog demonstrates the power of Astro's i18n capabilities combined with advanced markdown features. You can write content in multiple languages and provide a seamless experience for readers from different parts of the world.

### About Astro

[Astro](https://astro.build) is a modern static site generator that offers excellent performance and developer experience. Learn more about Astro's features in their [documentation](https://docs.astro.build).

## Key Features

### Multilingual Support

-   Content available in multiple languages
-   Easy language switching
-   SEO-friendly URLs with language prefixes

### Performance

-   Responsive design
-   Fast loading times
-   Zero JavaScript by default

### Enhanced Markdown

-   Automatic table of contents
-   Syntax highlighting
-   Clickable heading anchors
-   Smart typography for quotes and dashes

## Code Examples

### JavaScript

```javascript
// Example of a multilingual greeting function
function sayHello(name, lang = 'en') {
    const greetings = {
        en: 'Hello',
        vi: 'Xin chào',
        es: '¡Hola',
        fr: 'Bonjour',
    }

    return `${greetings[lang] || greetings.en}, ${name}!`
}

// Usage
console.log(sayHello('World')) // Hello, World!
console.log(sayHello('Thế giới', 'vi')) // Xin chào, Thế giới!
```

### TypeScript

```typescript
interface Greeting {
    [key: string]: string
}

class MultilingualGreeter {
    private greetings: Greeting = {
        en: 'Hello',
        vi: 'Xin chào',
    }

    greet(name: string, lang: string = 'en'): string {
        return `${this.greetings[lang] || this.greetings.en}, ${name}!`
    }
}
```

## Resources

Here are some helpful resources for building multilingual sites with Astro:

-   [Astro Documentation](https://docs.astro.build)
-   [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/)
-   [MDX Integration](https://docs.astro.build/en/guides/integrations-guide/mdx/)
-   [Tailwind CSS](https://tailwindcss.com)

## What's Next?

Stay tuned for more posts about:

1. Advanced i18n patterns
2. Content collections
3. Performance optimization
4. SEO best practices

Feel free to reach out if you have any questions or suggestions!
