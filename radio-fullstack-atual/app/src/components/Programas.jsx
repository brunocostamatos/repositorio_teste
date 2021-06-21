
import React from 'react'

import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


import{useEffect,useState} from 'react'
import GetSpreaker from '../utils/getSpreaker.js'
import GetEpisode from '../utils/getEpisode.js'

import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import { ListScroller } from './ListScroller'

const pathFunction = str => `/programas/${str}`

const CardProgramas = styled.li`
   margin-right: var(--padding);
   flex: 1 0 100%;
   min-width: 200px;
   max-width: 200px;
   display: flex;
   border-radius: 0.5rem;
   overflow: hidden;
   background-color: var(--color-white);
   box-shadow: 0 3px 10px 0 var(--color-black-30);
   transition: box-shadow 300ms;
   &:hover,
   &:focus {
      box-shadow: 0 0.5rem 1.25rem 0 var(--color-black-30);
   }

   article {
      display: flex;
   }

   img {
      width: 100%;
   }

   &:last-of-type {
      margin-right: 0;
   }
`
let teste=null;
   

export function Programas() {

   const history = useHistory();

   const [podcast, setPodcast] = useState([])
   const [dados, setDados] = useState([])
   const [userID, setUserID] = useState([])
   const [listaProgramas, setListaProgramas] = useState([])
   const [programaNoticia, setProgramaNoticia] = useState([])
   const [listaEpisodios, setListaEpisodios] = useState([])
   const [listaNoticias, setListaNoticias] = useState([])
   const [descricaoEpisodio, setDescricaoEpisodio] = useState([])
    
   useEffect(() => {
      GetSpreaker(setDados, setListaProgramas, setProgramaNoticia)
      GetEpisode(4119263, setPodcast,setListaNoticias, 0)
    }, []);

   const listaProgramasFiltrada = listaProgramas.sort((a, b) => b.datacao_filtrada - a.datacao_filtrada)

   if (dados == []) return null
   if (listaProgramasFiltrada.length==0) return null
   console.log(listaProgramasFiltrada)
   if (listaProgramasFiltrada.length!=0) {
      return (
      <ListScroller title="Programas" >
         {listaProgramasFiltrada.map((conteudo)=> <Card programa={conteudo}/>)}
      </ListScroller>
            
      )
   }  
   
   // function redireciona()
   // {     
   //    console.log("aqui")
   //    history.push("/programas");
   // }


   // function Card({programa,size}) {
   //    let block='none'
   //    return <CardProgramas size={size}>
   //                <article>
   //                      <img alt="Avatar" onClick={()=>muda()} src={programa.image_url}/>
   //                </article>
   //          </CardProgramas>
            
   // }
}


function Card({programa,size}) {
   
   return <CardProgramas size={size}>
               <Link to={`/programas/${programa.show_id}`}>
               <article>
                  <img alt="Avatar" src={programa.image_url}/>
               </article>
               </Link>
         </CardProgramas>
         
}
   

export default Programas
