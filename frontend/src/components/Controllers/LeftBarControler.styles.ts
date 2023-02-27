import { styled } from 'stitches.conf'

export const Container = styled('div', {
    margin: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2',
})

export const Logo = styled('img', {
    margin: 0,
    paddingTop: '$1',
    width: '38px',
    height: 'auto',
    cursor: 'pointer'
})
