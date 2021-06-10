import { Anotations } from '../Anotations'
import { CardsAnotations } from '../CardsAnotations'

import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
           <Anotations />
           <CardsAnotations /> 
        </Container>
    );
}