import { Howl } from 'howler';
import A from './bassPluck/A.mp3'
import ASharp from './bassPluck/ASharp.mp3'
import B from './bassPluck/B.mp3'
import C from './bassPluck/C.mp3'
import CSharp from './bassPluck/CSharp.mp3'
import D from './bassPluck/D.mp3'
import DSharp from './bassPluck/DSharp.mp3'
import E from './bassPluck/E.mp3'
import F from './bassPluck/F.mp3'
import FSharp from './bassPluck/FSharp.mp3'
import G from './bassPluck/G.mp3'
import GSharp from './bassPluck/GSharp.mp3'

//onHover the record button can have a meny that pops up similar to the game menu in the arcade that will give instructions. toggle the hints on and off
//identical file for the other sound samples, different import file only

const sounds = () => {
  
  let cNote = new Howl({
    src: [C]
  })
  let cSharp = new Howl({
    src: [CSharp]
  })
  let dNote = new Howl({
    src: [D]
  })
  let dSharp = new Howl({
    src: [DSharp]
  })
  let eNote = new Howl({
    src: [E]
  })
  let fNote = new Howl({
    src: [F]
  })
  let fSharp = new Howl({
    src: [FSharp]
  })
  let gNote = new Howl({
    src: [G]
  })
  let gSharp = new Howl({
    src: [GSharp]
  })
  let aNote = new Howl({
    src: [A]
  })
  let aSharp = new Howl({
    src: [ASharp]
  })
  let bNote= new Howl({
    src: [B]
  })
  

  return(
    [cNote, cSharp, dNote, dSharp, eNote, fNote, fSharp, gNote, gSharp, aNote, aSharp, bNote]
  )

}

export default sounds

