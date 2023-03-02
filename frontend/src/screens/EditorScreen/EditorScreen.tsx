import { Screen } from 'components/Screen'
import { Editor } from 'components/Editor'
import '../../userWorker'

export const EditorScreen = () => {
    return (
        <Screen _name_={'EDITOR-SCREEN'}>
            <Editor fileData={'hello'} fileType={'go'}/>
        </Screen>
    )
}
