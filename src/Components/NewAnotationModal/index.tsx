import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import { Container } from './styles'

interface NewAnotationModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewAnotationModal({isOpen, onRequestClose}: NewAnotationModalProps) {
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

            <Container>
            <h2>Adicionar Anotação</h2>

            <input
                placeholder="Título"
            />

            <textarea 
                placeholder="O que aconteceu?"
                
            />

            <button type="submit">
                Cadastrar
            </button>

            </Container>
        </Modal>
    );
}