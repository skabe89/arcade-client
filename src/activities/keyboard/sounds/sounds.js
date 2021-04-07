import {Howl, Howler} from 'howler';
import A from './A.mp3'
import ASharp from './ASharp.mp3'
import B from './B.mp3'
import C from './C.mp3'
import CSharp from './CSharp.mp3'
import D from './D.mp3'
import DSharp from './DSharp.mp3'
import E from './E.mp3'
import F from './F.mp3'
import FSharp from './FSharp.mp3'
import G from './G.mp3'
import GSharp from './GSharp.mp3'

const sounds = () => {
  
  sounds = {
  cNote: new Howl({
    src: [C]
  }),
  cSharp: new Howl({
    src: [CSharp]
  }),
  dNote: new Howl({
    src: [D]
  }),
  dSharp: new Howl({
    src: [DSharp]
  }),
  eNote: new Howl({
    src: [E]
  }),
  fNote: new Howl({
    src: [F]
  }),
  fSharp: new Howl({
    src: [FSharp]
  }),
  gNote: new Howl({
    src: [G]
  }),
  gSharp: new Howl({
    src: [GSharp]
  }),
  aNote: new Howl({
    src: [A]
  }),
  aSharp: new Howl({
    src: [ASharp]
  }),
  bNote: new Howl({
    src: [B]
  })
  }
}

export default sounds

