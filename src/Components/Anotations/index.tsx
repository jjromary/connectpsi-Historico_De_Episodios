import { useAnotations } from "../../hooks/useAnotations";
import { Container } from "./styles";

interface AnotationProps {
    onOpenNewAnotationModal: ()=> void;
}

export function Anotations({onOpenNewAnotationModal}: AnotationProps) { 
    const { anotations } = useAnotations();

    const sumary = anotations.reduce((acc, anotation) => {
        if(anotation.covered === 'nao') {
            acc.naoAbordado ++ ;
            acc.total ++;
        } else {
            acc.abordado ++;
            acc.total ++;
        }

        return acc;
    }, {
        abordado: 0,
        naoAbordado: 0,
        total: 0,


    })

    

    return (
        <Container>
            <div>
                <header>
                    <p>Anotações feitas</p>
                </header>
                <strong>{sumary.total}  </strong>
            </div>
            <div>
                <header>
                    <p>Anotações abordadas</p>
                </header>
                <strong>{sumary.abordado} </strong>
            </div>
            <div>
                <header>
                    <p>Anotações não abordadas</p>
                </header>
                <strong>{sumary.naoAbordado}</strong>
            </div>
            
            <button type="button" onClick={onOpenNewAnotationModal}>
                    <p>Nova anotação</p>
            </button>
            
            
        </Container>
    );
}