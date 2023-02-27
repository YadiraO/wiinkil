import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const ScreenManagerContainer = styled('div', {
    display: 'block',

    padding: '$2',
    margin: 0,
    overflowX: 'auto',
    overflowY: 'hidden',
    width: '100%',
    height: '100%',

    border: '1px solid red',
})

export const ScrollableContainer = styled('div', {
    overflowX: 'auto',
    overflowY: 'hidden',

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
