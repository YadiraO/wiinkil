import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '$7',
    border: `1px solid ${colors.PRIMARY}`,
    gap: '$4',
})

export const Section = styled('div', {
    display: 'inline-block',
    margin: 0,
    padding: 0,
    border: `1px solid ${colors.SECONDARY}`,
})

export const Gap = styled('div', {
    display: 'inline-block',
    flex: 1,
    margin: 0,
    padding: 0,
    border: `1px solid ${colors.WARN[300]}`,
})
