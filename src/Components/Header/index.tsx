import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';


export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="connectpsi" />
                <button type="button">
                    Nova anotação
                </button>
            </Content>
        </Container>
    );

}