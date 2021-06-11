import { useState } from "react";
import Modal  from 'react-modal';
import { Anotations } from '../Anotations'
import { CardsAnotations } from '../CardsAnotations'
import { NewAnotationModal } from "../NewAnotationModal";

import { Container } from './styles'

Modal.setAppElement('#root');

export function Dashboard() {

    const [isNewAnotationModalOpen, setIsNewAnotationModalOpen] = useState(false);

    function handleOpenNewAnotationModal() {
        setIsNewAnotationModalOpen(true);
    }

    function handleCloseNewAnotationModal() {
        setIsNewAnotationModalOpen(false);
    }

    return (
        <Container>
           <Anotations onOpenNewAnotationModal={handleOpenNewAnotationModal} />
           
           <NewAnotationModal 
                isOpen={isNewAnotationModalOpen}
                onRequestClose={handleCloseNewAnotationModal}
           />
           <CardsAnotations /> 
        </Container>
    );
}