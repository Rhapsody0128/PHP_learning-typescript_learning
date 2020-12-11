import { Gender } from './universal'
import { Appearance } from './appearance'
import { HumanStanderd } from './humanStanderd'
import { Human } from './human'

export class OriginalHuman implements HumanStanderd, Human {
  public name: string
  public age: number = Math.floor(Math.random() * 50)  + 15;
  public gender: Gender
  public getMarry: boolean = false
  public Dad: Human|OriginalHuman|string = 'unknown'
  public Mom: Human|OriginalHuman|string = 'unknown'
  public appearance: Appearance = new Appearance(
    {
      R: Math.floor(Math.random() * 255),
      G: Math.floor(Math.random() * 255),
      B: Math.floor(Math.random() * 255),
    }, {
      R: Math.floor(Math.random() * 255),
      G: Math.floor(Math.random() * 255),
      B: Math.floor(Math.random() * 255),
    })
  constructor(name: string) {
    this.name = name;
    (Math.random() > 0.5) ? this.gender = Gender.female : this.gender = Gender.male;
  }
}
