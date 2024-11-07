import { ui, defaultLang, routes } from './ui'
import type { Languages, UIKeys, Routes, RouteKeys } from './ui'

export function getLangFromUrl(url: URL): Languages {
    const [, lang] = url.pathname.split('/')
    return (lang in ui ? lang : defaultLang) as Languages
}

export function useTranslations(lang: Languages) {
    return function t(key: UIKeys): string {
        // Fallback to default language if translation is missing
        return ui[lang][key] ?? ui[defaultLang][key] ?? `[Missing translation: ${key}]`
    }
}

export function useTranslatedPath(lang: Languages) {
    return function translatePath(path: string, l: Languages = lang): string {
        const pathName = path.replaceAll('/', '') as RouteKeys

        // Check if translation exists
        const hasTranslation =
            defaultLang !== l && l in routes && pathName in (routes[l as keyof Routes] || {})

        // Translate path or keep original
        const translatedPath = hasTranslation ? '/' + routes[l as keyof Routes][pathName] : path

        // Always include language prefix
        return `/${l}${translatedPath.startsWith('/') ? translatedPath : `/${translatedPath}`}`
    }
}

export function getRouteFromUrl(url: URL): RouteKeys | undefined {
    const pathname = new URL(url).pathname
    const parts = pathname?.split('/').filter(Boolean)

    // Handle empty or malformed paths
    if (parts.length === 0) {
        return undefined
    }

    const currentLang = getLangFromUrl(url)
    const path = parts[parts.length - 1]

    // Check routes for current language
    if (currentLang in routes) {
        const currentRoutes = routes[currentLang as keyof Routes]
        const routeKey = Object.entries(currentRoutes).find(
            ([_, value]) => value === path,
        )?.[0] as RouteKeys

        return routeKey
    }

    return undefined
}

// Utility to check if a language is supported
export function isValidLanguage(lang: string): lang is Languages {
    return lang in ui
}
