import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const ButtonContainer = styled('button', {
    outline: 'none',
    border: 'none',
    padding: '$2',
    cursor: 'pointer',
    fontFamily: '$sans',
    width: '100%',
    display: 'flex',
    height: '$button',
    borderRadius: '$pill',
    margin: 0,

    variants: {
        variant: {
            action: {
                backgroundColor: `${colors.PRIMARY}05`,
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                size: '38px',
                borderRadius: '$1',

                '&:hover':{
                    backgroundColor: `${colors.PRIMARY}14`,
                    border: `1px solid ${colors.SECONDARY}15`
                }
            },
            primary: {
                backgroundColor: colors.PRIMARY,
                border: `1px solid ${colors.PRIMARY}`,
                justifyContent: 'center',
            },
            secondary: {
                backgroundColor: colors.TRANSPARENT,
                border: `1px solid ${colors.PRIMARY}`,
                justifyContent: 'center',
            },
            tertiary: {
                backgroundColor: colors.SECONDARY,
                border: `1px solid ${colors.TERTIARY}`,
                justifyContent: 'center',
            },
            quaternary: {
                backgroundColor: colors.TRANSPARENT,
                border: `1px solid ${colors.SECONDARY}`,
                justifyContent: 'center',
            },
        },
    },
})
