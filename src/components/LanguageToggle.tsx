import * as React from 'react'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { languages, type Languages as LanguageType } from '@/i18n/ui'
import { getLangFromUrl, useTranslatedPath } from '@/i18n/utils'

export function LanguageToggle() {
    const [currentLang, setCurrentLang] = React.useState<LanguageType>('en')

    React.useEffect(() => {
        // Get current language from URL or localStorage on component mount
        const url = new URL(window.location.href)
        const detectedLang = getLangFromUrl(url)

        // Check if localStorage is available
        const storedLang =
            typeof window !== 'undefined' && window.localStorage
                ? (localStorage.getItem('selectedLanguage') as LanguageType)
                : null

        // Prioritize URL language, then localStorage, then default to 'en'
        const finalLang = detectedLang || storedLang || 'en'

        // Update state and localStorage
        setCurrentLang(finalLang)

        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('selectedLanguage', finalLang)
        }
    }, [])

    const handleLanguageChange = (code: LanguageType) => {
        // Store selected language in localStorage if available
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('selectedLanguage', code)
        }

        const url = new URL(window.location.href)
        const translatePath = useTranslatedPath(currentLang)

        // Get the current path without the language prefix
        const currentPath = url.pathname.replace(`/${currentLang}`, '') || '/'

        // Generate new URL with selected language
        const newPath = translatePath(currentPath, code)
        window.location.href = newPath
    }

    // Type-safe language entries
    const languageEntries = Object.entries(languages) as Array<[LanguageType, string]>

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon">
                    <Languages className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languageEntries.map(([code, label]) => (
                    <DropdownMenuItem key={code} onClick={() => handleLanguageChange(code)}>
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
