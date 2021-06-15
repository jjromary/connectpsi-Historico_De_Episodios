import { useAnotations } from "../../hooks/useAnotations";
import { Container } from "./styles";

export function CardsAnotations() {
    const { anotations } = useAnotations();    

    return (
        <Container>
            
                {anotations.map(anotation => (
                    <div key={anotation.id}>
                        <h3>{anotation.title}</h3>
                        <div className="anotation">
                            <span>{anotation.anotation}</span>
                        </div>
                        <div className="buttons">
                            <button type="button">Editar</button>
                            <button type="button">Excluir</button>
                        </div>
                    </div>

                ))}
            
        </Container>
    );

}