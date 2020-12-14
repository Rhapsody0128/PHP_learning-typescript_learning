import {Appearance} from './appearance'
import {Gender} from '../universal'


export interface HumanStanderd {
  familyName: string
  name: string
  fullName: string
  age: number
  getMarry: boolean
  gender: Gender
  appearance: Appearance
}
