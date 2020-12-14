import { Gender } from '../universal'
import {  RandomFamilyName, RandomMaleName, RandomFemaleName } from './humanRandomName'
import { Appearance } from './appearance'
import { HumanStanderd } from './humanStanderd'


export class OriginalHuman implements HumanStanderd {
  public familyName: string
  public name: string
  public fullName: string
  public age: number = Math.floor(Math.random() * 50)  + 15;
  public gender: Gender
  public getMarry: boolean = false
  public Dad: object
  public Mom: object
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
  constructor() {
    this.familyName = RandomFamilyName[Math.floor(Math.random() * RandomFamilyName.length)]
    this.Dad = {
      name: 'null',
    };
    this.Mom = {
      name: 'null',
    };
    (Math.random() > 0.5) ? this.gender = Gender.female : this.gender = Gender.male;

    if (this.gender === Gender.female) {
      this.name = RandomFemaleName[Math.floor(Math.random() * RandomFamilyName.length)]
    } else if (this.gender === Gender.male) {
      this.name = RandomMaleName[Math.floor(Math.random() * RandomMaleName.length)]
    } else {
      this.name = 'null'
    }
    this.fullName = this.familyName + this.name

  }
}
