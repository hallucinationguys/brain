export const languages = {
  en: 'English',
  vi: 'Tiếng Việt',
} as const;

export const defaultLang = 'en';
// Set to true to always show language prefix in URLs
export const showDefaultLang = true;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'site.title': 'My Blog',
    'site.description': 'Welcome to my blog',
    'about.title': 'About Me',
    'about.description': 'Learn more about me',
  },
  vi: {
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.blog': 'Blog',
    'site.title': 'Blog của tôi',
    'site.description': 'Chào mừng đến với blog của tôi',
    'about.title': 'Về tôi',
    'about.description': 'Tìm hiểu thêm về tôi',
  },
} as const;

export type Languages = keyof typeof languages;
export type UIKeys = keyof typeof ui[typeof defaultLang];

export const routes = {
  vi: {
    'about': 'gioi-thieu',
    'blog': 'blog',
  },
} as const;

export type Routes = typeof routes;
export type RouteKeys = keyof Routes[keyof Routes];
