import React, { useCallback } from 'react'

import styles from '../assets/css'

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
      <a
         href="#btn-toggle-play"
         className={`${styleClass + ' ' || ''}${components.cover.btnToggle} ${
            paused ? icons.play : icons.pause
         }`}
         style={style}
         onClick={togglePlay}
      >
         {paused ? 'Play' : 'Pause'}
         <img src={cover} alt="Capa" />
      </a>
   )
}

export default Cover
