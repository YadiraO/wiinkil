import { Container, Section, Gap } from './UpperBarControler.styles'
import { Text } from 'components/Text'
import { Button } from 'components/Button'

export const UpperBarControler = () => {
    return (
        <Container>
            <Section>user picture</Section>
            <Section>search Bar with icon and promt</Section>
            <Section style={{ width: '220px' }}>
                <Button
                    text={'HI'}
                    variant={'tertiary'}
                    action={() => console.log('upper pannel HI')}
                />
            </Section>
            <Gap> - - - - - - - - - -</Gap>
            <Section>
                <Text.Subtitle color={'faint'}>sectionName</Text.Subtitle>
            </Section>
        </Container>
    )
}
