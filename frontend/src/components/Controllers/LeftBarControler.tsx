import { useCallback } from 'react'
import logo from 'assets/logo.png'
import { Button } from 'components/Button'
import { IconNames } from 'components/Icon'
import { Container, Logo } from './LeftBarControler.styles'
import { colors } from 'styles/colors'

const icons_active = 'home-abc-html-data-food-favorite'.split('-')
export const LeftBarControler = () => {
    const handleLogoAction = useCallback(() => {
        console.log('home requested')
    }, [])

    return (
        <Container>
            <Logo src={logo} alt="Logo" onClick={handleLogoAction} />
            {icons_active.map((item) => {
                return (
                    <>
                        <Button.Action
                            text={null}
                            color={colors.SECONDARY}
                            icon={item as IconNames}
                            action={() => {
                                console.log('button test for', item)
                            }}
                        />
                    </>
                )
            })}
        </Container>
    )
}
