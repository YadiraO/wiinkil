import { ComponentProps, PropsWithChildren } from 'react'

import { ScreenRoot } from './Screen.styles'

type ScreenOwnProps = ComponentProps<typeof ScreenRoot>
export type ScreenProps = PropsWithChildren &
    ScreenOwnProps & {
        _name_: string
    }

export const Screen = ({ children, _name_ }: ScreenProps) => {
    return <ScreenRoot id={_name_}>{children}</ScreenRoot>
}
