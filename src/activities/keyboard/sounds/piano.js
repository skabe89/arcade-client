import { Howl } from 'howler';
import A from './piano/A.mp3'
import ASharp from './piano/ASharp.mp3'
import B from './piano/B.mp3'
import C from './piano/c.mp3'
import CSharp from './piano/CSharp.mp3'
import D from './piano/D.mp3'
import DSharp from './piano/DSharp.mp3'
import E from './piano/E.mp3'
import F from './piano/F.mp3'
import FSharp from './piano/FSharp.mp3'
import G from './piano/G.mp3'
import GSharp from './piano/GSharp.mp3'

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
    {cNote: cNote,
    cSharp: cSharp,
    dNote: dNote,
    dSharp: dSharp,
    eNote: eNote,
    fNote: fNote,
    fSharp: fSharp,
    gNote: gNote,
    gSharp: gSharp,
    aNote: aNote,
    aSharp: aSharp,
    bNote: bNote
    }
  )

}

export default sounds