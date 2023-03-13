import { ComponentProps } from 'react'
import { TextContainer } from './Text.styles'

export type TextProps = ComponentProps<typeof TextContainer>

export const Text = ({
    children,
    color = 'default',
    size = 'normal',
    weight = 'regular',
    font = 'sans',
    paragraph = 'left',
    ...others
}: TextProps) => {
    return (
        // <TextContainer color={'danger'} size={'max'}>
        <TextContainer
            color={color}
            size={size}
            weight={weight}
            font={font}
            {...others}
            paragraph={paragraph}
        >
            {children}
        </TextContainer>
    )
}
const TextSmall = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} size={'small'}>
            {children}
        </Text>
    )
}
const TextHeader = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} size={'header'} weight={'semi'}>
            {children}
        </Text>
    )
}
const TextHeavy = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} weight={'bold'}>
            {children}
        </Text>
    )
}
const TextBoom = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} size={'max'} weight={'fat'}>
            {children}
        </Text>
    )
}

const TextBig = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} weight={'bold'} size={'big'}>
            {children}
        </Text>
    )
}
const TextTitle = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} weight={'bold'} size={'title'}>
            {children}
        </Text>
    )
}
const TextSubtitle = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} weight={'semi'} size={'subtitle'}>
            {children}
        </Text>
    )
}
const TextRegular = ({ children, ...others }: TextProps) => {
    return (
        <Text {...others} weight={'regular'} size={'normal'}>
            {children}
        </Text>
    )
}

Text.Boom = TextBoom
Text.Header = TextHeader
Text.Big = TextBig
Text.Title = TextTitle
Text.Subtitle = TextSubtitle
Text.Heavy = TextHeavy
Text.Regular = TextRegular
Text.Small = TextSmall

Text.displayName = 'Text'
