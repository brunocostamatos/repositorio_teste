import React from 'react'
import './PageContent.css'
import MediaQuery from 'react-responsive'
import { Helmet } from 'react-helmet'
import { FaTimes } from "react-icons/fa"

import { useHistory } from 'react-router-dom';

import { useParams, Link } from 'react-router-dom'

import{useState,useEffect} from 'react'
import Row from '../components/Row'
import Column from '../components/Column'
import Live from '../components/Live'
import ProgramasPagInterna from '../components/ProgramasPagInterna'

import style from '../assets/css'

import { getTitle } from '../utils/misc'

import logoSrc from '../assets/img/logo.png'
import styled from 'styled-components'


const LINK_REG_EXP = /(?<line_start>([ ]+|)<br[<>br/\s]+\/>|)(?<content>[^:]+):[^<]+(?<start><a(?<href>[ ]+href="[^"]+")[^</>]+>)[^<]+(?<end><\/a>)(?<line>[\n]+|)/g
const BR_REG_EXP = /<br[<>br/\s]+\/>/gm
const STRONG_TITLE_REG_EXP = /(?<start><br[<>br/\s]+\/>)(?<title>[^:<>/]+):(?<end>([ ]+|)<br[<>br/\s]+\/>)/g
const STRONG_TEXT_REG_EXP = /(?<start><br[<>br/\s]+\/>)(?<sub_title>[^:<>/]+):(?<name>[^<.]+)(\.|)/g

export const regExps = [
   [BR_REG_EXP, '<br />'],
   [
      LINK_REG_EXP,
      '$<line_start><a $<href> class="text-link-external" target="_blank" rel="noopener noreferrer">$<content>$<end>$<line>'
   ],
   [
      STRONG_TITLE_REG_EXP,
      '$<start><strong class="text-title">$<title>:</strong><br />'
   ],
   [
      STRONG_TEXT_REG_EXP,
      '$<start><strong class="text-sub-title">$<sub_title>:</strong>$<name>'
   ]
]

const WrapperScrollerAside = styled.div`
   min-width: 0;
`

export function Content() {
   

   let { slug, prog } = useParams()

   const [id, setId] = useState(prog)
   const [estado, setEstado] = useState(prog ? 'block' : 'none')
   //console.log(id)
   

   window.history.pushState("", "", "/programas");

   const html= "https://widget.spreaker.com/player?show_id="+id+"&theme=light&playlist=show&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=true&hide-likes=true&hide-comments=true&hide-sharing=false&hide-download=false"
   function player()
   {
      setEstado('none')
      prog=undefined;

   }
   const { app } = style.components
   return (
      
      <div
         className="overflow-x"
         style={{ padding: 'var(--padding) var(--padding) 0' }}
      >
         <Helmet>
            <title>{getTitle()}</title>
            <meta
               name="description"
               content="Rádio institucional da Universidade Federal do Rio de Janeiro"
            />
         </Helmet>
         <MediaQuery maxWidth={800}>
            <img className={app.logo} src={logoSrc} alt="" />
         </MediaQuery>
         <Row>
            <div className='coluna'> 
            <Live/>
            <p className='texto'>
            Para navegar pelos episódios
            dos programas da Rádio UFRJ,
            selecione a capa correspondente. 
            Enquanto você navega pelos programas
            e escolhe o que deseja ouvir, 
            poderá continuar curtindo nossa
            programação ao vivo 
            </p>
            
            </div>
            <MediaQuery minWidth={701}>
               <WrapperScrollerAside>
                  <ProgramasPagInterna  setEstado={setEstado} setId={setId} breakPoint={701}/>
               </WrapperScrollerAside>
            </MediaQuery>
         </Row>
         <MediaQuery maxWidth={700}>
            <Row>
            <ProgramasPagInterna setEstado={setEstado} setId={setId}/>
            </Row>
         </MediaQuery>
         <div className='modal' style={{
               display: estado ,
            }}>
            <div className='player' 
            >
            <iframe src= {html} >  </iframe> 
            <div className='icone' onClick={()=>player()}>
            <FaTimes size ="25"color="var(--color-blue)"/>
            </div>
            </div>
         </div>
         </div>
   )
   
}


export default Content