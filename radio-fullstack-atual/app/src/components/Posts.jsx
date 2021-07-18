import React, { useEffect, useState } from 'react';
import useFetch from '../utils/useFetch.js'
import { useQuery } from '@apollo/react-hooks'

import styled from 'styled-components'


const CardPost = styled.li`

 @media (max-width: 1024px) {
    .menu {
       display: none;
    }
 }
 
  flex: 1;
  max-width: 80ch;
 
  article {
    box-sizing: border-box;
    background-color: var(--color-white);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 3.999rem;
    box-shadow: 0 -5px 20px 0 var(--color-black-30);
 }
 
  h1 {
    font-size: var(--font-size-big);
    margin-bottom: 1.333rem;
 }
 
  h2 {
    font-weight: 700;
    margin-bottom: 1rem;
 }

 
 
  p {
    line-height: 1.333;
    margin-bottom: 1.333rem;
 }

`

let stringResultado = '<p class="font_8">"A Rádio UFRJ é uma emissora educativa, multiplataforma, desenvolvida no âmbito do Núcleo de Rádio e TV (NRTV) da Universidade Federal do Rio de Janeiro (UFRJ). Busca oferecer uma comunicação pública de qualidade, contribuindo para a construção coletiva do conhecimento, a diversidade, a representatividade e a inclusão de vozes e expressões culturais, a democratização da comunicação e a divulgação científica, tecnológica e de inovação.</p> <p class="font_8">&nbsp;A iniciativa tem, também, caráter formativo, visando promover a qualificação profissional para atuação em mídia sonora, não apenas de estudantes dos cursos de graduação na área de Comunicação Social, mas de estudantes e servidores de todas as áreas do conhecimento.</p> <p class="font_8">&nbsp;Transmitindo via internet desde outubro de 2019, a Rádio UFRJ integra a recém-constituída Rede de Rádios Universitárias do Brasil (RUBRA)."</p>';


let parser = new DOMParser();
let doc = parser.parseFromString(stringResultado, "text/html")

console.log(doc);

export function Posts() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://tiradioufrj.wixsite.com/api-radio/_functions/post')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.items);
            },
            // Nota: é importante lidar com errros aqui
            // em vez de um bloco catch() para não receber
            // exceções de erros reais nos componentes.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      console.log(items)
      return (items.map((conteudo)=> <Card post={conteudo}/>))

}



function Card ({post}){
   //console.log(post)
   
   var texto = parser.parseFromString(post.texto, "text/html")
   //let paragrafos = texto.getElementsByTagName("P");
  //console.log(paragrafos)
  return <CardPost >
           <article>
            <h1>{post.title}</h1>
             {/* {element.appendChild(texto.body.documentElement)} */}
             <p>{texto.body}</p>
          </article>
        </CardPost>
        
}

export default Posts

// export function Posts() {
//     const posts = useFetch('https://tiradioufrj.wixsite.com/api-radio/_functions/post');
//     console.log(posts);
//     return (null)
// }

//     fetch(`https://tiradioufrj.wixsite.com/api-radio/_functions/post`,
//     {
//         method: "get",
//         headers: 
//         {
//              "Access-Control-Allow-Origin": "*",
//              "Content-Type": "application/json"
//         }
//   })
//   .then((response) => response.json())