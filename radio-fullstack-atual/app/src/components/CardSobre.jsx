import React from 'react'

import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

export function CardSobre() {
}

const Card = styled.li`
.sobre {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2rem 1rem 0;
    justify-content: center;
    position: relative;
 }
 
 .menu {
    padding: calc(var(--padding) / 2) 0;
    margin: 0 2rem 0 0;
    background-color: var(--color-white);
    border-radius: 0.5rem;
    box-shadow: 0 -5px 20px 0 var(--color-black-30);
    position: sticky;
    top: 2rem;
 }
 
 .text-link {
    color: var(--color-blue);
 }
 .text-link:hover {
    text-decoration: underline;
 }
 
 @media (max-width: 1024px) {
    .menu {
       display: none;
    }
 }
 
 .link {
    display: flex;
    white-space: nowrap;
    padding: calc(var(--padding) / 2) var(--padding);
 }
 
 .conteudo {
    flex: 1;
    max-width: 80ch;
 }
 
 .conteudo article {
    box-sizing: border-box;
    background-color: var(--color-white);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 3.999rem;
    box-shadow: 0 -5px 20px 0 var(--color-black-30);
 }
 
 .conteudo h1 {
    font-size: var(--font-size-big);
    margin-bottom: 1.333rem;
 }
 
 .conteudo h2 {
    font-weight: 700;
    margin-bottom: 1rem;
 }
 .conteudo ul {
    display: flex;
    margin-bottom: 2rem;
    flex-wrap: wrap;
 }
 
 .conteudo .btn {
    background-color: hsl(204, 100%, 36%);
    color: var(--color-white);
    display: block;
    padding: 0.5rem 1rem;
    margin: 0 1rem 0.5rem 0;
    border-radius: 3px;
 }
 
 .conteudo .btn:hover {
    background-color: hsl(204, 100%, 26%);
 }
 
 .conteudo p {
    line-height: 1.333;
    margin-bottom: 1.333rem;
 }

`


function CardSobre() {
   
    return <Card >
             <article>
               <h1>Resultado chamada pública de conteúdo</h1>
               <p>Rio de Janeiro, 20 de agosto de 2020</p>
               <p>
                  As 41 propostas submetidas na chamada pública para seleção,
                  produção e veiculação de conteúdos na Rádio UFRJ foram
                  apreciadas pela Direção do Núcleo de Rádio e TV (NRTV) e pelo
                  Conselho Curador da emissora.{' '}
                  <a className="text-link" href="#edital">
                     Veja o resultado.
                  </a>
               </p>
               <p>Diretoria do NRTV</p>
            </article>
          </Card>
          
 }

export default Programas