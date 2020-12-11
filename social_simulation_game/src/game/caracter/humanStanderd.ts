import {Appearance} from './appearance'
import { Human } from './human'
import { OriginalHuman } from './originalHuman'
import {Gender} from './universal'

export interface HumanStanderd {
  age: number
  getMarry: boolean
  appearance: Appearance
  name: string
  gender: Gender
  Dad: Human|OriginalHuman|string
  Mom: Human|OriginalHuman|string

}
