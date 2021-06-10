import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    

    button {
        font-size: 1.5rem;
        color: var(--text-title);
        background: #40E0D0; 
        border: 0 ;
        border-radius: 0.25rem;
        
        transition: filter 0.2s;

            &:hover{
                filter: brightness(0.8)
            }    
    }

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content:center;
        }

        strong {
            display: flex;
            justify-content: center;
            margin-top: 0.5rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 2rem;
        }

        
    }
    

    
`;