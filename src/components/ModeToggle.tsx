import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<'theme-light' | 'dark' | 'system'>('theme-light')

    React.useEffect(() => {
        // Check if we're in a browser environment
        if (typeof window === 'undefined') return

        // Retrieve theme from localStorage if available
        const storedTheme = window.localStorage
            ? (localStorage.getItem('selectedTheme') as 'theme-light' | 'dark' | 'system')
            : null

        // Determine initial theme
        const isDarkMode = document.documentElement.classList.contains('dark')
        const initialTheme = storedTheme || (isDarkMode ? 'dark' : 'theme-light')

        setThemeState(initialTheme)
    }, [])

    React.useEffect(() => {
        // Check if we're in a browser environment
        if (typeof window === 'undefined') return

        // Store theme in localStorage if available
        if (window.localStorage) {
            localStorage.setItem('selectedTheme', theme)
        }

        const isDark =
            theme === 'dark' ||
            (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
    }, [theme])

    const handleThemeChange = (newTheme: 'theme-light' | 'dark' | 'system') => {
        setThemeState(newTheme)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon">
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleThemeChange('theme-light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
