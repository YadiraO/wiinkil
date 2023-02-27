import { Text } from 'components/Text'
import { lorem } from 'fixtures/lorem'
import { ScreenManagerContainer, ScrollableContainer } from './ScreenManager.styles'

export const ScreenManager = () => {
    return (
        <ScreenManagerContainer>
            <ScrollableContainer>
                <div style={{ height: '45px', backgroundColor: '#45678945' }}></div>
                <div style={{ height: '45px', backgroundColor: 'red' }}></div>
                <div style={{ height: '45px', backgroundColor: 'purple' }}></div>
                
                <div style={{
                    position: 'relative',
                    display: 'block',
                    flex:1,
                    width: '250px',
                    overflow: 'auto'
                }}>

                <Text.Regular>
                    ScreenManager. {lorem(3048)}
                    <Text.Regular color={'warn'} weight={'bold'} font={'serif'}>
                        {' '}
                        ScreenManager.{lorem(848)}{' '}
                    </Text.Regular>
                    {lorem(5000)}
                </Text.Regular>
                </div>
                <div style={{ height: '45px', backgroundColor: '#45678945' }}></div>
            </ScrollableContainer>
        </ScreenManagerContainer>
    )
}
