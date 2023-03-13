import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
// import { gradientStyles } from 'assets/styles/Gradients'
import { colors } from 'styles/colors'

export const { styled, css, theme, config, getCssText, globalCss, keyframes } = createStitches({
    theme: {
        shadows: {
            level1: `0px 2px 8px 0px ${colors.DARK[300]}40`,
            level2: `0px 5px 16px 2px ${colors.DARK[300]}40`,
            level3: `0px 10px 24px 4px ${colors.DARK[300]}40`,
            level4: `0px 12px 28px 6px ${colors.DARK[300]}40`,
        },
        space: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px',
            9: '80px',
        },
        sizes: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px',
            9: '80px',
            10: '90px',
            button: '36px',
        },
        fontSizes: {
            small: '9pt',
            normal: '12pt',
            middle: '16pt',
            subtitle: '18pt',
            title: '21pt',
            big: '30pt',
            head: '36pt',
            bigger: '62pt',
        },
        fontFamily: {
            sans: "'Catamaran', sans-serif",
            serif: "'Source Serif Pro', serif",
        },
        radii: {
            1: '4px',
            2: '6px',
            3: '8px',
            4: '12px',
            round: '50%',
            pill: '9999px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
    },
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
    utils: {
        bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value,
        }),
        bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
            boxShadow: value,
        }),
        ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
            overflowX: value,
        }),
        oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
            overflowY: value,
        }),
        pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
            pointerEvents: value,
        }),
        horizontalMargin: (value: Stitches.PropertyValue<'margin'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        verticalMargin: (value: Stitches.PropertyValue<'margin'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        size: (value: Stitches.PropertyValue<'width'>) => {
            const str = value.toString()
            const n = str.indexOf(' ') > 0 ? str.split(' ') : [str, str]
            return {
                width: n[0],
                height: n[1],
            }
        },
    },
})

export const globalStyles = globalCss({
    '@import': [
        "url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;400;600;800;900&family=Source+Serif+Pro:wght@200;400;600;700;900&display=swap')",
    ],
    '*': {
        boxSizing: 'border-box',
    },
    html: {
        fontSize: '$normal',
        fontFamily: 'Catamaran, sans-serif',
        color: '$text',
    },
    body: {
        margin: 0,
        padding: 0,
        letterSpacing: '0px',
        background: '$main_back',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
    p: {
        color: colors.TEXT,
    },
})

export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space
