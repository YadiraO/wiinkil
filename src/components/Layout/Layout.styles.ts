import { styled } from 'stitches.conf'
import { colors } from 'styles/colors'

export const LayoutContainer = styled('main', {
    margin: 0,
    padding: 0,
    background: colors.BACK,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
})

export const LeftPannel = styled('div', {
    display: 'flex',
    overflowX: 'auto',
    background: colors.BACK,
    width: '48px',
    height: '100%',
    borderRight: `1px solid ${colors.TEXT}08`,
    boxShadow: '$level1',
})

export const MainRoot = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 0,
    width: '100%',
    height: '100%',
})
