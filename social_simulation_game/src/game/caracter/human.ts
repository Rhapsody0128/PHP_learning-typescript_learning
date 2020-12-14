import { Gender } from '../universal'
import {Appearance} from './appearance'
import {HumanStanderd} from './humanStanderd'
import { OriginalHuman } from './originalHuman'
import { Inherit } from './humanInherit'
import { Enviroment } from '../environment/environment'
export class Human implements HumanStanderd, Inherit {
  public familyName: string
  public name: string
  public fullName: string
  public age: number
  public gender: Gender
  public Dad: Human|OriginalHuman
  public Mom: Human|OriginalHuman
  public getMarry: boolean
  public appearance: Appearance

  constructor(name: string, Dad: Human|OriginalHuman, Mom: Human|OriginalHuman) {
    if (Enviroment.maleOrFemaleSociety === Gender.female) {
      this.familyName = Mom.familyName
    } else {
      this.familyName = Dad.familyName
    }
    this.name = name;
    this.fullName = this.familyName + this.name

    this.age = 0;
    (Math.random() > 0.5) ? this.gender = Gender.female : this.gender = Gender.male;
    this.Dad = Dad
    this.Mom = Mom
    this.getMarry = false
    this.appearance = new Appearance(Mom.appearance, Dad.appearance)
  }
}

