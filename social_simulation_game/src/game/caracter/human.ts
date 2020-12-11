import { Gender } from './universal'
import {Appearance} from './appearance'
import {HumanStanderd} from './humanStanderd'
import { OriginalHuman } from './originalHuman'

export class Human implements HumanStanderd {
  public name: string
  public age: number
  public gender: Gender
  public Dad: Human|OriginalHuman|string
  public Mom: Human|OriginalHuman|string
  public getMarry: boolean
  public appearance: Appearance
  constructor(name: string, Dad: Human|OriginalHuman, Mom: Human|OriginalHuman) {
    this.name = name;
    this.age = 0;
    (Math.random() > 0.5) ? this.gender = Gender.female : this.gender = Gender.male;
    this.Dad = Dad
    this.Mom = Mom
    this.getMarry = false
    this.appearance = new Appearance(Mom.appearance, Dad.appearance)
  }
}

