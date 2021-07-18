import React, { useCallback } from 'react'
import srcBg2 from '../assets/img/bg2.png'
import styles from '../assets/css'
import styled from 'styled-components'
import MultiPlayer from '../utils/Multiplayer'

const { icons, components } = styles



export function Cover({
   cover,
   context,
   url,
   state: [paused, setPaused],
   styleClass,
   style,
   isLive,
}) {
   const togglePlay = useCallback(
      
      event => {
         event.preventDefault()
         
         if (paused) {
            context.play(url)
         } else {
            context.pause(isLive)
         }

         setPaused(!paused)
         
      },
      [context, setPaused, paused, url, isLive]
      
   )

   return (
      /*<a
         href="#btn-toggle-play"
         className={`${styleClass + ' ' || ''}${components.cover.btnToggle} ${
            paused ? icons.play : icons.pause
         }`}
         style={style}
         onClick={togglePlay}
         
      >
         {paused ? 'Play' : 'Pause'}
         <img src={srcBg2} alt="Capa" />
         
      </a>*/
      
      <MultiPlayer urls={["http://servidor21.brlogic.com:7712/live"]}/>
      
   )
}

export default Cover
