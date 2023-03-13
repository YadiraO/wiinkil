import { useEffect, useState } from 'react'
import { Screen } from 'components/Screen'
import { Editor } from 'components/Editor'
// import * as stringData from 'assets/data/sample.conf'
import { StaticProvider } from 'engine/network/apis'

import '../../userWorker'

export const EditorScreen = () => {
    const [fileToEdit /* , setFileToEdit */] = useState('/src/assets/data/sample.conf')
    const [fileData, setFileData] = useState('')

    useEffect(() => {
        console.log('fileToEdit:', fileToEdit)

        StaticProvider.get(fileToEdit, { responseType: 'text' }).then((data) => {
            setFileData(data)
        })
    }, [fileToEdit])

    return (
        <Screen _name_={'EDITOR-SCREEN'}>
            {fileData && <Editor fileData={fileData} fileType={'go'} />}
        </Screen>
    )
}
