import React from 'react'

import styled from 'styled-components'

const Card = styled.li`

 
 article {
    box-sizing: border-box;
    background-color: var(--color-white);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 3.999rem;
    box-shadow: 0 -5px 20px 0 var(--color-black-30);
 }
 
 

 .end {
    border-radius: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-white);
    bottom: 0;
    right: 0;
    right: 1rem;
    padding: calc(var(--padding) / 3) var(--padding);
    box-sizing: border-box;
    box-shadow: 0 3px 10px 0 var(--color-black-30);
    background: radial-gradient(
        120.97% 387.51% at 96.21% -32.89%,
        #00a47a 1.49%,
        #00a47a 1.73%,
        #009aa3 36.74%,
        #2790b9 65.93%,
        #3b88c3 87.86%,
        #4085c6 100%
        );

 }

 .status{
    border-radius: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-white);
    bottom: 0;
    right: 0;
    right: 1rem;
    padding: calc(var(--padding) / 3) var(--padding);
    box-sizing: border-box;
    box-shadow: 0 3px 10px 0 var(--color-black-30);
    background: radial-gradient(
        120.97% 387.51% at 96.21% -32.89%,
        #bb5a73 1.49%,
        #d55c5b 44.35%,
        #e55d48 80.15%,
        #eb5d40 100%
        );
 }
 .btns{
    display: flex;
    width: 500px;
    justify-content: space-between;
    
 }

 @media (max-width: 1024px) {
    article {
       width: 300px;
     }
    .btns{
        width: 260px;
        font-size: 80%;
        justify-content: space-between ;
    }
 }

p {
    line-height: 1.333;
    margin-bottom: 1.333rem;
 }
 .titulo{
     font-size: 150%;
     color:#008DE9;
     margin-bottom: 1rem;
 }

`

export function CardChamadas() {
   
    return(<Chamadas/>)
}
function Chamadas() {
   
    return <Card>
             <article>
               <p className="titulo">Chamada Pública de Bolsistas de Pesquisa - Edital 01/2021</p>
               <p>
               Com o início da pandemia do novo coronavírus, em março de 2020, a Prefeitura do Rio de Janeiro suspendeu a gratuidade nos transportes públicos. Quase um ano depois, as aulas presenciais permanecem suspensas, mas muitos estudantes têm desenvolvido atividades nos campi e precisam das quatro passagens diárias asseguradas pela gratuidade. É o caso de Victória Cristina Silva, estudante de Enfermagem da UFRJ, que atua como voluntária do Hospital Universitário, no Fundão.
               </p>
                    <div className="btns">
                        <span className="status">FECHADO</span>
                        <span className="end">VEJA O EDITAL COMPLETO</span>
                    </div>
            </article>
          </Card>
          
 }

export default CardChamadas