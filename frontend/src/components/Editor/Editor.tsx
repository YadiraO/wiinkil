import { FC, useRef, useState, useEffect, useCallback } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import styles from 'styles/editor.module.css'

declare global {
    interface Window {
        editor?: any
    }
}

type EditorCustomProps = {
    fileData: string
    fileType: string
    showMiniMap?: boolean
}

export const Editor: FC<EditorCustomProps> = ({
    fileData,
    fileType,
    showMiniMap = false,
}: EditorCustomProps) => {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | undefined>(undefined)
    const monacoEl = useRef(null)
    const [dat, setDat] = useState(fileData)

    const getDataInput = useCallback(() => {
        try {
            const newData = window.editor.getValue()
            setDat(newData)
        } catch {
            alert('FAIL getting the text form the editor, try keeping your data and reloading the page.')
        }
    }, [])

    useEffect(() => {
        if (monacoEl) {
            setEditor((editor) => {
                if (editor) return

                window.editor = monaco.editor.create(monacoEl.current!, {
                    value: fileData,
                    language: fileType,
                    theme: 'vs-dark',
                    minimap: { enabled: showMiniMap },
                })
                return window.editor
            })
        }

        return () => editor?.dispose()
    }, [monacoEl.current])

    return (
        <div>
            <button onClick={getDataInput}>GETDATA</button>
            <div className={styles.Editor} ref={monacoEl}></div>
        </div>
    )
}
