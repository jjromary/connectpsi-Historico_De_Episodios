import { FormEvent, useState } from 'react';
import { useAnotations } from '../../hooks/useAnotations';
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg';
import noChecked from "../../assets/noChecked.svg"
import Checked from "../../assets/checked.svg"

import { Container, AnotationsTypeContainer, RadioBox } from './styles'



interface NewAnotationModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewAnotationModal({isOpen, onRequestClose}: NewAnotationModalProps) {
    const { createAnotation } = useAnotations();
    
    const [title, setTitle] = useState('');
    const [anotation, setAnotation] = useState('');
    const [covered, setCovered] = useState('nao');

    async function handleCreateNewAnotation(event: FormEvent) {
        event.preventDefault();

        await createAnotation({
             title,
             anotation,
             covered,
        }) 
        
        setTitle('');
        setAnotation('');
        setCovered('nao');
        onRequestClose();
        
    }    
    
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            > 
                <img src={closeImg} alt="fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewAnotation}>
            <h2>Adicionar Anotação</h2>

            <input
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <textarea 
                placeholder="O que aconteceu?"
                value={anotation}
                onChange={event => setAnotation(event.target.value)}
                
            />

            <AnotationsTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => { setCovered('sim'); }}
                    isActive={covered === 'sim'}
                    activeColor="yellow"
                >   
                    <img src={Checked} alt="abordado" />
                    <span>Abordado</span>
                </RadioBox>

                <RadioBox
                    type="button"
                    onClick={() => { setCovered('nao'); }}
                    isActive={covered === 'nao'}
                    activeColor="grey"
                >
                     <img src={noChecked} alt="não abordado" />
                    <span>Não abordado</span>
                </RadioBox>
            </AnotationsTypeContainer>

            <button type="submit">
                Cadastrar
            </button>

            </Container>
        </Modal>
    );
}