import { ui, defaultLang, showDefaultLang, routes } from './ui';
import type { Languages, UIKeys, Routes, RouteKeys } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UIKeys) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: Languages) {
  return function translatePath(path: string, l: Languages = lang) {
    const pathName = path.replaceAll('/', '') as RouteKeys;
    const hasTranslation = defaultLang !== l && 
                          l in routes && 
                          pathName in (routes[l as keyof Routes] || {});
    
    const translatedPath = hasTranslation 
      ? '/' + routes[l as keyof Routes][pathName]
      : path;
    
    // Always include language prefix, even for default language
    return `/${l}${translatedPath.startsWith('/') ? translatedPath : `/${translatedPath}`}`;
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    if (currentLang in routes) {
      const route = routes[currentLang as keyof Routes];
      const routeKey = Object.entries(route).find(([_, value]) => value === path)?.[0];
      return routeKey;
    }
    return undefined;
  }

  if (currentLang in routes) {
    const currentRoutes = routes[currentLang as keyof Routes];
    const routeKey = Object.entries(currentRoutes).find(([_, value]) => value === path)?.[0];
    return routeKey;
  }

  return undefined;
}
