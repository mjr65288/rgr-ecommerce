/* eslint-disable @typescript-eslint/no-empty-object-type */
// first copy theme color from https://ui.shadcn.com/themes
// then in chatgpt:
// PROMPT: convert this css to js object. don't convert css variable to cameCase

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ColorState = {
    availableColors: {
        name: string
        root: {}
        dark: {}
    }[]
    defaultColor: string
    userColor?: string
}
const availableColors = [
    {
        name: 'Default',
        root: {
            "--radius": "0.625rem", // Last --radius value takes precedence
            "--background": "oklch(1 0 0)",
            "--foreground": "oklch(0.145 0 0)",
            "--card": "oklch(1 0 0)",
            "--card-foreground": "oklch(0.145 0 0)",
            "--popover": "oklch(1 0 0)",
            "--popover-foreground": "oklch(0.145 0 0)",
            "--primary": "oklch(0.205 0 0)",
            "--primary-foreground": "oklch(0.985 0 0)",
            "--secondary": "oklch(0.97 0 0)",
            "--secondary-foreground": "oklch(0.205 0 0)",
            "--muted": "oklch(0.97 0 0)",
            "--muted-foreground": "oklch(0.556 0 0)",
            "--accent": "oklch(0.97 0 0)",
            "--accent-foreground": "oklch(0.205 0 0)",
            "--destructive": "oklch(0.577 0.245 27.325)",
            "--border": "oklch(0.922 0 0)",
            "--input": "oklch(0.922 0 0)",
            "--ring": "oklch(0.708 0 0)",
            "--chart-1": "oklch(0.646 0.222 41.116)",
            "--chart-2": "oklch(0.6 0.118 184.704)",
            "--chart-3": "oklch(0.398 0.07 227.392)",
            "--chart-4": "oklch(0.828 0.189 84.429)",
            "--chart-5": "oklch(0.769 0.188 70.08)",
            "--sidebar": "oklch(0.985 0 0)",
            "--sidebar-foreground": "oklch(0.145 0 0)",
            "--sidebar-primary": "oklch(0.205 0 0)",
            "--sidebar-primary-foreground": "oklch(0.985 0 0)",
            "--sidebar-accent": "oklch(0.97 0 0)",
            "--sidebar-accent-foreground": "oklch(0.205 0 0)",
            "--sidebar-border": "oklch(0.922 0 0)",
            "--sidebar-ring": "oklch(0.708 0 0)"
        },
        dark: {
            "--background": "oklch(0.145 0 0)",
            "--foreground": "oklch(0.985 0 0)",
            "--card": "oklch(0.205 0 0)",
            "--card-foreground": "oklch(0.985 0 0)",
            "--popover": "oklch(0.205 0 0)",
            "--popover-foreground": "oklch(0.985 0 0)",
            "--primary": "oklch(0.922 0 0)",
            "--primary-foreground": "oklch(0.205 0 0)",
            "--secondary": "oklch(0.269 0 0)",
            "--secondary-foreground": "oklch(0.985 0 0)",
            "--muted": "oklch(0.269 0 0)",
            "--muted-foreground": "oklch(0.708 0 0)",
            "--accent": "oklch(0.269 0 0)",
            "--accent-foreground": "oklch(0.985 0 0)",
            "--destructive": "oklch(0.704 0.191 22.216)",
            "--border": "oklch(1 0 0 / 10%)",
            "--input": "oklch(1 0 0 / 15%)",
            "--ring": "oklch(0.556 0 0)",
            "--chart-1": "oklch(0.488 0.243 264.376)",
            "--chart-2": "oklch(0.696 0.17 162.48)",
            "--chart-3": "oklch(0.769 0.188 70.08)",
            "--chart-4": "oklch(0.627 0.265 303.9)",
            "--chart-5": "oklch(0.645 0.246 16.439)",
            "--sidebar": "oklch(0.205 0 0)",
            "--sidebar-foreground": "oklch(0.985 0 0)",
            "--sidebar-primary": "oklch(0.488 0.243 264.376)",
            "--sidebar-primary-foreground": "oklch(0.985 0 0)",
            "--sidebar-accent": "oklch(0.269 0 0)",
            "--sidebar-accent-foreground": "oklch(0.985 0 0)",
            "--sidebar-border": "oklch(1 0 0 / 10%)",
            "--sidebar-ring": "oklch(0.556 0 0)"
        },
    },
    {
        name: 'Blue',
        root: {
            "--radius": "0.65rem",
            "--background": "oklch(1 0 0)",
            "--foreground": "oklch(0.141 0.005 285.823)",
            "--card": "oklch(1 0 0)",
            "--card-foreground": "oklch(0.141 0.005 285.823)",
            "--popover": "oklch(1 0 0)",
            "--popover-foreground": "oklch(0.141 0.005 285.823)",
            "--primary": "oklch(0.623 0.214 259.815)",
            "--primary-foreground": "oklch(0.97 0.014 254.604)",
            "--secondary": "oklch(0.967 0.001 286.375)",
            "--secondary-foreground": "oklch(0.21 0.006 285.885)",
            "--muted": "oklch(0.967 0.001 286.375)",
            "--muted-foreground": "oklch(0.552 0.016 285.938)",
            "--accent": "oklch(0.967 0.001 286.375)",
            "--accent-foreground": "oklch(0.21 0.006 285.885)",
            "--destructive": "oklch(0.577 0.245 27.325)",
            "--border": "oklch(0.92 0.004 286.32)",
            "--input": "oklch(0.92 0.004 286.32)",
            "--ring": "oklch(0.623 0.214 259.815)",
            "--chart-1": "oklch(0.646 0.222 41.116)",
            "--chart-2": "oklch(0.6 0.118 184.704)",
            "--chart-3": "oklch(0.398 0.07 227.392)",
            "--chart-4": "oklch(0.828 0.189 84.429)",
            "--chart-5": "oklch(0.769 0.188 70.08)",
            "--sidebar": "oklch(0.985 0 0)",
            "--sidebar-foreground": "oklch(0.141 0.005 285.823)",
            "--sidebar-primary": "oklch(0.623 0.214 259.815)",
            "--sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
            "--sidebar-accent": "oklch(0.967 0.001 286.375)",
            "--sidebar-accent-foreground": "oklch(0.21 0.006 285.885)",
            "--sidebar-border": "oklch(0.92 0.004 286.32)",
            "--sidebar-ring": "oklch(0.623 0.214 259.815)"
        },
        dark: {
            "--background": "oklch(0.141 0.005 285.823)",
            "--foreground": "oklch(0.985 0 0)",
            "--card": "oklch(0.21 0.006 285.885)",
            "--card-foreground": "oklch(0.985 0 0)",
            "--popover": "oklch(0.21 0.006 285.885)",
            "--popover-foreground": "oklch(0.985 0 0)",
            "--primary": "oklch(0.546 0.245 262.881)",
            "--primary-foreground": "oklch(0.379 0.146 265.522)",
            "--secondary": "oklch(0.274 0.006 286.033)",
            "--secondary-foreground": "oklch(0.985 0 0)",
            "--muted": "oklch(0.274 0.006 286.033)",
            "--muted-foreground": "oklch(0.705 0.015 286.067)",
            "--accent": "oklch(0.274 0.006 286.033)",
            "--accent-foreground": "oklch(0.985 0 0)",
            "--destructive": "oklch(0.704 0.191 22.216)",
            "--border": "oklch(1 0 0 / 10%)",
            "--input": "oklch(1 0 0 / 15%)",
            "--ring": "oklch(0.488 0.243 264.376)",
            "--chart-1": "oklch(0.488 0.243 264.376)",
            "--chart-2": "oklch(0.696 0.17 162.48)",
            "--chart-3": "oklch(0.769 0.188 70.08)",
            "--chart-4": "oklch(0.627 0.265 303.9)",
            "--chart-5": "oklch(0.645 0.246 16.439)",
            "--sidebar": "oklch(0.21 0.006 285.885)",
            "--sidebar-foreground": "oklch(0.985 0 0)",
            "--sidebar-primary": "oklch(0.546 0.245 262.881)",
            "--sidebar-primary-foreground": "oklch(0.379 0.146 265.522)",
            "--sidebar-accent": "oklch(0.274 0.006 286.033)",
            "--sidebar-accent-foreground": "oklch(0.985 0 0)",
            "--sidebar-border": "oklch(1 0 0 / 10%)",
            "--sidebar-ring": "oklch(0.488 0.243 264.376)"
        },
    },
    {
        name: 'Red',
        root: {
            "--radius": "0.65rem",
            "--background": "oklch(1 0 0)",
            "--foreground": "oklch(0.141 0.005 285.823)",
            "--card": "oklch(1 0 0)",
            "--card-foreground": "oklch(0.141 0.005 285.823)",
            "--popover": "oklch(1 0 0)",
            "--popover-foreground": "oklch(0.141 0.005 285.823)",
            "--primary": "oklch(0.637 0.237 25.331)",
            "--primary-foreground": "oklch(0.971 0.013 17.38)",
            "--secondary": "oklch(0.967 0.001 286.375)",
            "--secondary-foreground": "oklch(0.21 0.006 285.885)",
            "--muted": "oklch(0.967 0.001 286.375)",
            "--muted-foreground": "oklch(0.552 0.016 285.938)",
            "--accent": "oklch(0.967 0.001 286.375)",
            "--accent-foreground": "oklch(0.21 0.006 285.885)",
            "--destructive": "oklch(0.577 0.245 27.325)",
            "--border": "oklch(0.92 0.004 286.32)",
            "--input": "oklch(0.92 0.004 286.32)",
            "--ring": "oklch(0.637 0.237 25.331)",
            "--chart-1": "oklch(0.646 0.222 41.116)",
            "--chart-2": "oklch(0.6 0.118 184.704)",
            "--chart-3": "oklch(0.398 0.07 227.392)",
            "--chart-4": "oklch(0.828 0.189 84.429)",
            "--chart-5": "oklch(0.769 0.188 70.08)",
            "--sidebar": "oklch(0.985 0 0)",
            "--sidebar-foreground": "oklch(0.141 0.005 285.823)",
            "--sidebar-primary": "oklch(0.637 0.237 25.331)",
            "--sidebar-primary-foreground": "oklch(0.971 0.013 17.38)",
            "--sidebar-accent": "oklch(0.967 0.001 286.375)",
            "--sidebar-accent-foreground": "oklch(0.21 0.006 285.885)",
            "--sidebar-border": "oklch(0.92 0.004 286.32)",
            "--sidebar-ring": "oklch(0.637 0.237 25.331)"
        },
        dark: {
            "--background": "oklch(0.141 0.005 285.823)",
            "--foreground": "oklch(0.985 0 0)",
            "--card": "oklch(0.21 0.006 285.885)",
            "--card-foreground": "oklch(0.985 0 0)",
            "--popover": "oklch(0.21 0.006 285.885)",
            "--popover-foreground": "oklch(0.985 0 0)",
            "--primary": "oklch(0.637 0.237 25.331)",
            "--primary-foreground": "oklch(0.971 0.013 17.38)",
            "--secondary": "oklch(0.274 0.006 286.033)",
            "--secondary-foreground": "oklch(0.985 0 0)",
            "--muted": "oklch(0.274 0.006 286.033)",
            "--muted-foreground": "oklch(0.705 0.015 286.067)",
            "--accent": "oklch(0.274 0.006 286.033)",
            "--accent-foreground": "oklch(0.985 0 0)",
            "--destructive": "oklch(0.704 0.191 22.216)",
            "--border": "oklch(1 0 0 / 10%)",
            "--input": "oklch(1 0 0 / 15%)",
            "--ring": "oklch(0.637 0.237 25.331)",
            "--chart-1": "oklch(0.488 0.243 264.376)",
            "--chart-2": "oklch(0.696 0.17 162.48)",
            "--chart-3": "oklch(0.769 0.188 70.08)",
            "--chart-4": "oklch(0.627 0.265 303.9)",
            "--chart-5": "oklch(0.645 0.246 16.439)",
            "--sidebar": "oklch(0.21 0.006 285.885)",
            "--sidebar-foreground": "oklch(0.985 0 0)",
            "--sidebar-primary": "oklch(0.637 0.237 25.331)",
            "--sidebar-primary-foreground": "oklch(0.971 0.013 17.38)",
            "--sidebar-accent": "oklch(0.274 0.006 286.033)",
            "--sidebar-accent-foreground": "oklch(0.985 0 0)",
            "--sidebar-border": "oklch(1 0 0 / 10%)",
            "--sidebar-ring": "oklch(0.637 0.237 25.331)"
        },
    },
    {
        name: 'Green',
        root: {
            "--radius": "0.65rem",
            "--background": "oklch(1 0 0)",
            "--foreground": "oklch(0.141 0.005 285.823)",
            "--card": "oklch(1 0 0)",
            "--card-foreground": "oklch(0.141 0.005 285.823)",
            "--popover": "oklch(1 0 0)",
            "--popover-foreground": "oklch(0.141 0.005 285.823)",
            "--primary": "oklch(0.723 0.219 149.579)",
            "--primary-foreground": "oklch(0.982 0.018 155.826)",
            "--secondary": "oklch(0.967 0.001 286.375)",
            "--secondary-foreground": "oklch(0.21 0.006 285.885)",
            "--muted": "oklch(0.967 0.001 286.375)",
            "--muted-foreground": "oklch(0.552 0.016 285.938)",
            "--accent": "oklch(0.967 0.001 286.375)",
            "--accent-foreground": "oklch(0.21 0.006 285.885)",
            "--destructive": "oklch(0.577 0.245 27.325)",
            "--border": "oklch(0.92 0.004 286.32)",
            "--input": "oklch(0.92 0.004 286.32)",
            "--ring": "oklch(0.723 0.219 149.579)",
            "--chart-1": "oklch(0.646 0.222 41.116)",
            "--chart-2": "oklch(0.6 0.118 184.704)",
            "--chart-3": "oklch(0.398 0.07 227.392)",
            "--chart-4": "oklch(0.828 0.189 84.429)",
            "--chart-5": "oklch(0.769 0.188 70.08)",
            "--sidebar": "oklch(0.985 0 0)",
            "--sidebar-foreground": "oklch(0.141 0.005 285.823)",
            "--sidebar-primary": "oklch(0.723 0.219 149.579)",
            "--sidebar-primary-foreground": "oklch(0.982 0.018 155.826)",
            "--sidebar-accent": "oklch(0.967 0.001 286.375)",
            "--sidebar-accent-foreground": "oklch(0.21 0.006 285.885)",
            "--sidebar-border": "oklch(0.92 0.004 286.32)",
            "--sidebar-ring": "oklch(0.723 0.219 149.579)"
        },
        dark: {
            "--background": "oklch(0.15 0.02 150)", // Darker green-tinted background
            "--foreground": "oklch(0.985 0 0)",
            "--card": "oklch(0.22 0.02 150)", // Slightly lighter green-tinted card
            "--card-foreground": "oklch(0.985 0 0)",
            "--popover": "oklch(0.22 0.02 150)",
            "--popover-foreground": "oklch(0.985 0 0)",
            "--primary": "oklch(0.696 0.17 162.48)",
            "--primary-foreground": "oklch(0.393 0.095 152.535)",
            "--secondary": "oklch(0.274 0.02 150)", // Green-tinted secondary
            "--secondary-foreground": "oklch(0.985 0 0)",
            "--muted": "oklch(0.274 0.02 150)", // Green-tinted muted
            "--muted-foreground": "oklch(0.705 0.015 286.067)",
            "--accent": "oklch(0.274 0.02 150)", // Green-tinted accent
            "--accent-foreground": "oklch(0.985 0 0)",
            "--destructive": "oklch(0.704 0.191 22.216)",
            "--border": "oklch(1 0 0 / 10%)",
            "--input": "oklch(1 0 0 / 15%)",
            "--ring": "oklch(0.527 0.154 150.069)",
            "--chart-1": "oklch(0.488 0.243 264.376)",
            "--chart-2": "oklch(0.696 0.17 162.48)",
            "--chart-3": "oklch(0.769 0.188 70.08)",
            "--chart-4": "oklch(0.627 0.265 303.9)",
            "--chart-5": "oklch(0.645 0.246 16.439)",
            "--sidebar": "oklch(0.22 0.02 150)", // Green-tinted sidebar
            "--sidebar-foreground": "oklch(0.985 0 0)",
            "--sidebar-primary": "oklch(0.696 0.17 162.48)",
            "--sidebar-primary-foreground": "oklch(0.393 0.095 152.535)",
            "--sidebar-accent": "oklch(0.274 0.02 150)", // Green-tinted sidebar accent
            "--sidebar-accent-foreground": "oklch(0.985 0 0)",
            "--sidebar-border": "oklch(1 0 0 / 10%)",
            "--sidebar-ring": "oklch(0.527 0.154 150.069)"
        }
    }
]
const initialState: ColorState = {
    availableColors,
    defaultColor: availableColors[0].name,
    userColor: undefined,
}
export const colorStore = create<ColorState>()(
    persist(() => initialState, {
        name: 'colorStore',
    })
)

export default function useColorStore(theme: string = 'light') {
    const colorState = colorStore()
    const getColor = () => {
        const userColor = colorState.availableColors.find(
            (t) => t.name === colorState.userColor
        )
        if (userColor) return userColor
        const defaultColor = colorState.availableColors.find(
            (t) => t.name === colorState.defaultColor
        )
        if (defaultColor) return defaultColor

        return colorState.availableColors[0]
    }

    const color = getColor()
    const cssColors: { [key: string]: string } =
        theme === 'light' ? color.root : color.dark
    return {
        availableColors,
        cssColors,
        color,
        getColor,
        setColor: (name: string, isUserColor?: boolean) => {
            colorStore.setState(
                isUserColor ? { userColor: name } : { defaultColor: name }
            )
        },
        updateCssVariables: () => {
            const color = getColor()
            const colors: { [key: string]: string } =
                theme === 'light' ? color.root : color.dark
            for (const key in colors) {
                document.documentElement.style.setProperty(key, colors[key])
            }
        },
    }
}