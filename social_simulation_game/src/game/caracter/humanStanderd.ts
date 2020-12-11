import {Appearance} from './appearance'
import { Human } from './human'
import {Gender} from './universal'

export interface HumanStanderd {
  age: number
  getMarry: boolean
  appearance: Appearance
  name: string
  gender: Gender
  Dad: Human|null
  Mon: Human|null
}
