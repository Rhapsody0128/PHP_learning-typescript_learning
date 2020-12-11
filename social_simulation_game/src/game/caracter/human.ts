import { Gender } from './universal'
import {Appearance} from './appearance'
import {HumanStanderd} from './humanStanderd'

export class Human implements HumanStanderd {
  public name: string
  public age: number
  public gender: Gender
  public Dad: Human
  public Mon: Human
  public getMarry: boolean
  public appearance: Appearance
  constructor(name: string, Dad: Human, Mon: Human) {
    this.name = name;
    this.age = 0;
    (Math.random() > 0.5) ? this.gender = Gender.female : this.gender = Gender.male;
    this.Dad = Dad
    this.Mon = Mon
    this.getMarry = false
    this.appearance = new Appearance(Mon.appearance, Dad.appearance)
  }
}

