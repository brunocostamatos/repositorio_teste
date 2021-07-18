import { createContext } from 'react'
import { Howl } from 'howler'


function createAudioContext() {
   let paused = true
   let current = null
   const audios = {}
   

   function createHowl(src) {
      if (current !== audios[src]) pause()
      if (!audios[src]) audios[src] = new Howl({
         src,
         audio: new Audio(src)
      })
      current = audios[src]
   }

   function play(src) {
      createHowl(src)
      current.play()
      paused = false
   }

   function pause(live = false) {
      if (current) {
         current.pause()
         live && current.unload()
      }
      paused = true
   }

   return {
      paused,
      current,
      play,
      pause,
   }
}


export const playerData = createAudioContext()

export const PlayerContext = createContext(playerData)

export default PlayerContext
