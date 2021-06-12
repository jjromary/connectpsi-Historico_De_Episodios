import styled from "styled-components";

export const Container = styled.div`
   margin-top: 2rem;
   
      div{     
         padding: 0.5rem 0.5rem;
         background: var(--shape);
         border-radius: 0.5rem;
         margin-top: 0.5rem;
         
         display: flex;
         align-items: baseline;
         justify-content: space-between;
            
         h3 {
            color: var(--text-title);
            font-weight: 400 bold;
            padding: 0.5rem;   
            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 70px;           
         }

         .anotation{
            max-width: 60%;
            min-width: 10%;
            margin: 1rem 1rem;
            

            span {
               padding: 0.2rem 0rem; 
               color: var(--text-body);   
               font-weight: 500;
               font-size: 1rem;
               
               white-space: nowrap;
               overflow: hidden;
               text-overflow: clip;
               direction: ltr;
               margin: 0rem 0rem;          
            }
         }

         .buttons {

            button {
               margin: 0.5rem ;
               font-size: 0.8rem;
               color: var(--text-title);
               background: #40E0D0; 
               border: 0;
               font-weight: 500;
               border-radius: 0.25rem;
               padding: 0.5rem;
               font-size: 1rem;
               
               

               transition: filter 0.2s;
               

               &:hover{
                  filter: brightness(0.8)
               }    
            }
         }
      }
   
`;
