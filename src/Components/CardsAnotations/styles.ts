import styled from "styled-components";

export const Container = styled.div`
   margin-top: 2rem;
  
   .cards{
      width: 100%;
      
      div{      
         font-weight:400 ;
         border-spacing: 1rem; 
         padding: 1rem 1rem;
         text-align: left;
         line-height: 1.5rem;
         background: var(--shape);
         border-radius: 0.25rem;
         margin-top: 1rem;

         display: flex;
         align-items: center;
         justify-content: center;
         
                 
         h3 {
            color: var(--text-title);
            font-weight: 400;
            padding: 0.5rem;   
            text-align: left;
            display: flex;
            align-items: center;
            width: 180px;
            height: 70px;           
         }

         input, label{
            color: var(--text-title);
            line-height: 1rem;
            margin: 0.5rem;
            font-weight: 400 bold;  
            
         } 

         p {
            padding: 0.5rem 0.5rem; 
            color: var(--text-body);
            display: inline-block;          

            white-space: nowrap;
            width: 90%;
            overflow: hidden;
            text-overflow: clip;
            direction: ltr;
            margin: 0;          
         }

         button {
            margin: 0.5rem ;
            font-size: 0.8rem;
            color: var(--text-title);
            background: #40E0D0; 
            border: 0;
            font-weight: bold;
            border-radius: 0.25rem;
            padding: 0.5rem 0.5rem;
            

            transition: filter 0.2s;
            

            &:hover{
                filter: brightness(0.8)
            }    
         }
      }
   }
`;
