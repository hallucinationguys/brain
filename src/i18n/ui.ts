export const languages = {
    en: 'English',
    vi: 'Tiếng Việt',
} as const

export const defaultLang = 'en'

// Set to true to always show language prefix in URLs
export const showDefaultLang = true

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'site.title': 'My Blog',
        'site.description': 'Welcome to my blog',
        'about.title': 'About Me',
        'about.description': 'Learn more about me',
        'blog.published': 'Published on',
        'blog.updated': 'Last updated',
        'blog.readMore': 'Read more',
        'blog.backToBlog': 'Back to Blog',
        'blog.no_posts': 'No blog posts available',
        'footer.copyright': '© {year} {siteName}. All rights reserved.',
    },
    vi: {
        'nav.home': 'Trang chủ',
        'nav.about': 'Giới thiệu',
        'nav.blog': 'Blog',
        'site.title': 'Blog của tôi',
        'site.description': 'Chào mừng đến với blog của tôi',
        'about.title': 'Về tôi',
        'about.description': 'Tìm hiểu thêm về tôi',
        'blog.published': 'Đăng vào',
        'blog.updated': 'Cập nhật lần cuối',
        'blog.readMore': 'Đọc thêm',
        'blog.backToBlog': 'Quay lại Blog',
        'blog.no_posts': 'Không có bài viết nào',
        'footer.copyright': '© {year} {siteName}. Bản quyền đã được bảo lưu.',
    },
} as const

export const routes = {
    vi: {
        about: 'gioi-thieu',
        blog: 'blog',
        home: 'trang-chu',
    },
} as const

export type Languages = keyof typeof languages
export type UIKeys = keyof (typeof ui)[typeof defaultLang]
export type Routes = typeof routes
export type RouteKeys = keyof Routes[keyof Routes]
