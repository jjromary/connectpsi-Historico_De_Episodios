import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';

import noChecked from "../../assets/noChecked.svg"
import Checked from "../../assets/checked.svg"

import { Container, AnotationsTypeContainer, RadioBox } from './styles'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewAnotationModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewAnotationModal({isOpen, onRequestClose}: NewAnotationModalProps) {
    const [title, setTitle] = useState('');
    const [anotation, setAnotation] = useState('');
    const [covered, setCovered] = useState('nao');

    function handleCreateNewAnotation(event: FormEvent) {
        event.preventDefault();

        const data = ({
            title,
            anotation,
            covered,
        });

        api.post('/anotations', data)
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