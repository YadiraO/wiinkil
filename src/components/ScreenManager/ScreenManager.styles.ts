import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const ScreenManagerContainer = styled('div', {
    display: 'block',
    padding: '$1',
    margin: 0,
    overflow: 'auto',
    width: '100%',
    height: '100%',
})

export const ScrollableContainer = styled('div', {
    overflow: 'auto',

    variants: {
        horizontal: {
            true: {
                backgroundColor: `${colors.PRIMARY}05`,
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                overflowY: 'auto',

                '&:hover': {
                    backgroundColor: `${colors.PRIMARY}14`,
                    border: `1px solid ${colors.SECONDARY}15`,
                },
            },
        },
    },
})
