import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const TextContainer = styled('span', {
    color: '$text',
    fontFamily: '$sans',
    display: 'inline-block',

    variants: {
        font: {
            sans: {
                fontFamily: '$sans',
            },
            serif: {
                fontFamily: '$serif',
            },
            mono: {
                fontFamily: 'monospace',
            },
        },
        size: {
            small: {
                fontSize: '$small',
                letterSpacing: 1.2,
                lineHeight: 1.15,
            },
            normal: {
                fontSize: '$normal',
                letterSpacing: 1,
                lineHeight: 1.3,
            },
            mid: {
                fontSize: '$middle',
                letterSpacing: 1,
                lineHeight: 1.1,
            },
            header: {
                fontSize: '$head',
                letterSpacing: 1,
                lineHeight: 1.1,
            },
            big: {
                fontSize: '$big',
                letterSpacing: 0.5,
                lineHeight: 1.05,
            },
            subtitle: {
                fontSize: '$subtitle',
                letterSpacing: 1,
                lineHeight: 1.1,
            },
            title: {
                fontSize: '$title',
                letterSpacing: 1.2,
                lineHeight: 1.2,
            },
            max: {
                fontSize: '$bigger',
                letterSpacing: 2.4,
                lineHeight: 1.01,
            },
        },
        weight: {
            thin: {
                fontWeight: '100',
            },
            regular: {
                fontWeight: '200',
            },
            semi: {
                fontWeight: '400',
            },
            bold: {
                fontWeight: '600',
            },
            fat: {
                fontWeight: '800',
            },
        },
        color: {
            default: {
                color: colors.TEXT,
            },
            light: {
                color: colors.LIGHT,
            },
            faint: {
                color: colors.TERTIARY,
            },
            success: {
                color: colors.SUCCESS[100],
            },
            danger: {
                color: colors.DANGER[100],
            },
            warn: {
                color: colors.WARN[200],
            },
        },
        paragraph: {
            left: {
                textAlign: 'left',
                textJustify: 'none',
            },
            right: {
                textAlign: 'right',
                textJustify: 'none',
            },
            center: {
                textAlign: 'center',
                textJustify: 'none',
            },
            justified: {
                textAlign: 'justify',
                textJustify: 'inter-word',
            },
        },
    },

    defaultVariants: {
        size: 'regular',
        font: 'sans',
    },
})
