import { EditorScreen } from 'screens/EditorScreen'
import { ScreenManagerContainer, ScrollableContainer } from './ScreenManager.styles'

export const ScreenManager = () => {
    return (
        <ScreenManagerContainer>
            <ScrollableContainer>
                
                <EditorScreen />
            </ScrollableContainer>
        </ScreenManagerContainer>
    )
}
