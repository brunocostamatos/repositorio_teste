//live com gambiarra para rodar sem a api

import React, { useContext, useState, Fragment, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_LIVE } from '../graphql/Query'

import Cover from './Cover'

import srcBg from '../assets/img/bg.png'


import AnimatedLiveIcon from './LiveIcon'
import styles from '../assets/css'

import PlayerContext from '../utils/audio'

import GetSpreaker from '../utils/getSpreaker.js'

const { icons, shadow, components } = styles
const { live: styleLive, cover: styleCover } = components


export function LivePlayer() {
   
   let { data } = useQuery(GET_LIVE)
   const context = useContext(PlayerContext)

   const pauseState = useState(context.paused)
   
   if (!data) {
      data = {
         live: {
            url: '',
            statusUrl: 'https://d36nr0u3xmc4mm.cloudfront.net/index.php/api/streaming/status/7712/b4adb51456e79883ecadce1a7ffefbf4/servidor21.brlogic.com',
            cover: '',
            content: {
               cover: null,
               name: 'Rádio UFRJ',
               clock: '-',
               singer: '',
               music: '',
               author: '-'
            }
         }
      }
   }

   const { content, cover, url, statusUrl } = data.live
   
   return (
      <article className={styleLive.container}>
         <div className={`${styleLive.current} ${shadow.up}`}>
            <header className={styleLive.header}>
               <span className={styleLive.name}>
                  <h1 className={styleLive.title}>Ao Vivo</h1>
                  <AnimatedLiveIcon
                     className={styleLive.icon}
                     state={pauseState}
                  />
               </span>
            </header>
            <Content
               statusUrl={statusUrl}
               content={content}
               cover={cover}
               url={url}
               context={context}
               state={pauseState}
            />
         </div>
         <footer></footer>
      </article>
   )
}

function Content({ statusUrl, content, cover, url, context, state }) {
   const [status, setStatus] = useState({})
   
   statusUrl = `https://d36nr0u3xmc4mm.cloudfront.net/index.php/api/streaming/status/7712/b4adb51456e79883ecadce1a7ffefbf4/servidor21.brlogic.com`
   useEffect(() => {
      if (!statusUrl) return
      const id = setInterval(() => {
         fetch(statusUrl)
            .then(res => res.json())
            .then(({ currentTrack }) => {
               const [music, singer] = currentTrack.split(' - ')
               setStatus({
                  music,
                  singer
               })
               
            })
            
      }, 2000)
      return () => {
         
         clearInterval(id)
         
      }
   }, [context, setStatus, statusUrl])

   const realCover = status.cover || content.cover || cover
   
   
   const [dados, setDados] = useState([])
   const [listaProgramas, setListaProgramas] = useState([])
   const [programaNoticia, setProgramaNoticia] = useState([])
   useEffect(() => {GetSpreaker(setDados, setListaProgramas, setProgramaNoticia)}, []); 
   //console.log("dados",dados)
   //console.log("listaProgramas",listaProgramas)
   //console.log("programaNoticia",programaNoticia)
   //console.log("status",status)
   //status.music = status.music
   for(let el in listaProgramas){
      if(status.music == listaProgramas[el].title){
         cover = listaProgramas[el].image_url
         break
      }
      else{
         if(status.music == programaNoticia[0].title){
            cover = programaNoticia[0].image_url
            break
         }
         else{
            cover = dados.image_url
         }
      }
   }
   


   return (
      <Fragment>
         <section className={styleLive.info}>
            
            <Cover
               cover= {cover}
               url={url}
               context={context}
               state={state}
               styleClass={components.live.btnToggle}
               isLive={true}
            />
            <section className={styleLive.text}>
               <footer>
                  <p className={icons.music_note}>
                     {status.music || content.music}
                     
                  </p>
                  <p className={icons.singer}>
                     {status.singer || content.singer}
                     
                  </p>
               </footer>
            </section>
         </section>
         <img className={styleCover.bgClean}  src={srcBg} alt="Capa"/>
                  
      </Fragment>
   )
}

export default LivePlayer