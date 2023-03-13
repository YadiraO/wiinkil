import { LayoutContainer, LeftPannel, MainRoot } from './Layout.styles'
import { LeftBarControler, UpperBarControler } from 'components/Controllers'
import { ScreenManager } from 'components/ScreenManager'

export const Layout = () => {
    return (
        <LayoutContainer>
            <LeftPannel>
                <LeftBarControler />
            </LeftPannel>
            <MainRoot>
                <UpperBarControler />
                <ScreenManager />
            </MainRoot>
        </LayoutContainer>
    )
}
