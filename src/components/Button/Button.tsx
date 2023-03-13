import { ComponentProps } from 'react'
import { Icon, IconNames } from 'components/Icon'
import { Text } from 'components/Text'
import { ButtonContainer } from './Button.styles'
import { colors } from 'styles/colors'

export type ButtonProps = ComponentProps<typeof ButtonContainer> & {
    text: string | null
    action: () => void
    icon?: IconNames
    disabled?: boolean
    outline?: boolean
    color?: string
    size?: SizeType
}
type SizeType = 'small' | 'big' | 'medium'
type ParamsType = { icon: IconNames; color?: string; size?: SizeType }

type GetIconType = (parms: ParamsType) => React.ReactNode

const getIcon: GetIconType = ({ icon, color = colors.PRIMARY, size = 'small' }) => {
    return <Icon color={color} size={size} icon={icon} />
}

export const Button = ({
    text,
    icon,
    color,
    action,
    variant = 'primary',
    disabled = false,
    outline = false,
    size,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonContainer variant={variant} disabled={disabled} onClick={action} {...rest}>
            {icon && getIcon({ icon, color, size })}
            {text && <Text.Heavy>{text}</Text.Heavy>}
        </ButtonContainer>
    )
}
const ActionButton = ({
    text,
    variant,
    color = colors.TEXT,
    onClick = () => {},
    size,
    ...rest
}: ButtonProps) => {
    return <Button text={text} variant={'action'} color={color} {...rest} />
}

Button.Action = ActionButton
