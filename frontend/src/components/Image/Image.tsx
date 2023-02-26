import { ComponentProps } from 'react'
import { ImageRoot, ImageSrc } from './Image.styles'
import { useImage } from 'hooks/useGetImage/useImageResource'
import { iKeyNames } from 'sources/imageRepository'

type ImageOwnProps = ComponentProps<typeof ImageRoot>
export type ImageProps = ImageOwnProps & {
    _name_?: string
    source?: string
    src?: iKeyNames
}

export const Image = ({ src, source }: ImageProps) => {
    const { gi } = useImage()

    return (
        <ImageRoot>
            <ImageSrc src={src ? gi(src) : source} />
        </ImageRoot>
    )
}
