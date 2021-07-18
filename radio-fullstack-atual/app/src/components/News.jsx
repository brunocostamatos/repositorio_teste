
import React from 'react'





import{useEffect,useState} from 'react'
//import GetSpreaker from '../utils/getSpreaker.js'
import GetEpisode from '../utils/getEpisode.js'

import GetSpreaker from '../utils/getSpreaker'


import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { ListScroller } from './ListScroller'



//const formater = stringToHtml([...regExps, [/<a[^>]+>[^<]+<\/a>/g, '']])

const pathFunction = str => `/'${str}`

const CardNews = styled.li`
   display: flex;
   border-radius: 0.5rem;
   margin-right: var(--padding);
   flex: 1;
   max-width: ${props => `${props.size || '40ch'}`};
   min-width: 278px;
   background-color: var(--color-white);
   box-shadow: 0 3px 10px 0 var(--color-black-30);
   transition: box-shadow 300ms;
   &:hover,
   &:focus {
      box-shadow: 0 0.5rem 1.25rem 0 var(--color-black-30);
   }
   a {
      display: flex;
      padding: var(--padding) var(--padding);
      position: relative;
      &::before {
         content: '';
         position: absolute;
         bottom: 1.4rem;
         left: 0;
         width: 100%;
         height: 70%;
         background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
         );
         border-radius: 0 0 0.5rem 0.5rem;
      }
   }
   article {
      flex: 1;
      max-height: 20rem;
      overflow: hidden;
   }
   h2 {
      font-size: 1.75rem;
      line-height: 1.75rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: var(--color-blue);
   }
   p {
      line-height: 1.2;
   }

   .end {
      border-radius: 2rem;
      text-transform: uppercase;
      display: flex;
      font-weight: 700;
      color: var(--color-white);
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateY(50%);
      right: 1rem;
      padding: calc(var(--padding) / 3) var(--padding);
      box-sizing: border-box;
      box-shadow: 0 3px 10px 0 var(--color-black-30);
   }

   &:nth-of-type(even) .end {
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

   &:nth-of-type(odd) .end {
      background: radial-gradient(
         120.97% 387.51% at 96.21% -32.89%,
         #bb5a73 1.49%,
         #d55c5b 44.35%,
         #e55d48 80.15%,
         #eb5d40 100%
      );
   }

   &:first-of-type .end {
      background: radial-gradient(
         120.97% 387.51% at 96.21% -32.89%,
         #bb5a73 0%,
         #bcacd5 28.36%,
         #bcacd4 28.53%,
         #84aeb5 53.99%,
         #45aa97 75.22%,
         #00a682 91.17%,
         #00a47a 100%
      );
   }

   &:last-of-type {
      margin-right: 0;
   }
   iframe{
      border-radius: 0.5rem;
      overflow: hidden;
      background-color: var(--color-white);
      box-shadow: 0 3px 10px 0 var(--color-black-30);
      transition: box-shadow 300ms;
      display:none;
      position: absolute;
      transform: translatex(-32%);
      margin-top:-35px;
      height:450px;
      width:900px; 
  }  
`


export function News({setEstado, setId, breakPoint }) {
   const [podcast, setPodcast] = useState([])
   const [dados, setDados] = useState([])
   const [userID, setUserID] = useState([])
   const [listaProgramas, setListaProgramas] = useState([])
   const [programaNoticia, setProgramaNoticia] = useState([])
   const [listaEpisodios, setListaEpisodios] = useState([])
   const [listaNoticias, setListaNoticias] = useState([])
   const [descricaoEpisodio, setDescricaoEpisodio] = useState([])
   
   
 
   useEffect(() => {
      GetSpreaker(setDados, setPodcast, setListaProgramas, setProgramaNoticia)
      GetEpisode(4119263, setListaNoticias, 0)
   }, []);

   

   if (dados == []) return null

   if (listaNoticias.response==undefined) 
   {  //console.log("undef")
      return null
   }

   if (listaNoticias.response.length==0) 
   {  
      return null
   }

   listaNoticias.response.sort((a, b) => parseInt(b.episodio_id) - parseInt(a.episodio_id))
   //ID DO PROGRAMA NOTICIAS 4119263

   function player(id)
    {
      setEstado('block')
      setId(id)
      
    }
    
    function Card({programa, size}){
      
      return <CardNews size={size}>
         <Link onClick={()=>player(programa.episodio_id)}>
            <article>
               <h2>{programa.titulo}</h2>
               <p>{programa.descricao}</p>
            </article>
            <span onClick={()=>player(programa.episodio_id)} className="end">
               <span>Ouvir</span>
            </span>
         </Link>
      </CardNews>
      
        
      
    }


   if (listaNoticias.response.length != 0){
      return (
         <ListScroller title="Notícias">
            
            {listaNoticias.response.map((conteudo) => {
               return( 
               <Card programa={conteudo}/>
               )
            }) }
         </ListScroller>
      );
   }

   

   
}

News.defaultProps = {
   breakPoint: 701
}




export default News