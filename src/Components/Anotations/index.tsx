import { Container } from "./styles";


export function Anotations() {
    return (
        <Container>
            <div>
                <header>
                    <p>Anotações feitas</p>
                </header>
                <strong>10 </strong>
            </div>
            <div>
                <header>
                    <p>Anotações abordadas</p>
                </header>
                <strong>3 </strong>
            </div>
            <div>
                <header>
                    <p>Anotações não abordadas</p>
                </header>
                <strong>7 </strong>
            </div>
            
            <button type="button">
                    <p>Nova anotação</p>
            </button>
            
        </Container>
    );
}