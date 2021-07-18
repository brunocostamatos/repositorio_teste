import React from 'react'

import MediaQuery from 'react-responsive'
import { Helmet } from 'react-helmet'

import Row from '../components/Row'
import Live from '../components/Live'
import News from '../components/News'
import Programas from '../components/Programas'

import style from '../assets/css'

import { getTitle } from '../utils/misc'

import{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

import logoSrc from '../assets/img/logo.png'
import styled from 'styled-components'
import { FaTimes } from "react-icons/fa"

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
export function Home() {

   let { slug, prog } = useParams()

   const [id, setId] = useState(prog)
   const [estado, setEstado] = useState(prog ? 'block' : 'none')
   //console.log(id)
   

   window.history.pushState("", "", "/");
   
   const html= "https://widget.spreaker.com/player?episode_id="+id+"&theme=light&playlist=show&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=true&hide-likes=true&hide-comments=true&hide-sharing=false&hide-download=false"
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
            <Live />
            <MediaQuery minWidth={701}>
               <WrapperScrollerAside>
                  <News setEstado={setEstado} setId={setId} breakPoint={701} />
               </WrapperScrollerAside>
            </MediaQuery>
         </Row>
         <MediaQuery setEstado={setEstado} setId={setId} maxWidth={700}>
            <Row>
               <News />
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
         <Row>
            <Programas />
         </Row>
      </div>
   )
}

export default Home
