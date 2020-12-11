import { Gender } from './universal'
import {Appearance} from './appearance'
import {HumanStanderd} from './humanStanderd'

export class OriginalHuman implements HumanStanderd {
  public name: string
  public age: number
  public gender: Gender
  public Dad: null
  public Mon: null
  public getMarry: boolean
  public appearance: Appearance
  constructor(name: string) {
    this.name = name;
    this.age = Math.floor(Math.random() * 50)  + 15;
    (Math.random() > 0.5) ? this.gender = Gender.female : this.gender = Gender.male;
    this.Dad = null
    this.Mon = null
    this.getMarry = false
    this.appearance = new Appearance(
      {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255),
      }, {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255),
      },
    )
  }
}
