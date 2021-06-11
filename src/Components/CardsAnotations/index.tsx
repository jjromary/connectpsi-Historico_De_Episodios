import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface Anotation {
    id: number;
    title: string;
    anotation: string;
    createdAt: string;
}

export function CardsAnotations() {

    const [anotations, setAnotations] = useState<Anotation[]>([]);

    useEffect(() => {
        api.get('anotations')
            .then(response => setAnotations(response.data.anotations))
    }, []);

    return (
        <Container>
            <div className="cards">
                {anotations.map(anotation => (
                    <div key={anotation.id}>
                        <h3>{anotation.title}</h3>
                        <p>{anotation.anotation}</p>
                        <button type="button">Editar</button>
                        <button type="button">Excluir</button>
                    </div>

                ))}
            </div>
        </Container>
    );

}