import styled from "styled-components";

export const Container = styled.div`
   margin-top: 3rem;
`;

export const Content = styled.div`
   
   section{
      display: flex;
      flex-direction: column;
     
      div{
         background:  var(--shape);
         margin-top: 1rem;
         border: 0;
         border-radius: 0.25rem;
         display: flex;   
         align-items: center;

         h3 {
            color: var(--text-title);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            margin-right: 0.2rem;
         }

         input, label {
            color: var(--text-title);
            line-height: 1rem;
            margin: 0 0.5rem;
         } 

         p
         {
            padding: 1rem 2rem;
            border: 0;
            color: var(--text-body);
            display: inline-block;

            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: clip;
            direction: ltr;
            margin: 0;
            

         }

         button {
            margin: 0.5rem;
            font-size: 0.7rem;
            color: var(--text-title);
            background: #40E0D0; 
            border: 0;
            font-weight:bold;
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

