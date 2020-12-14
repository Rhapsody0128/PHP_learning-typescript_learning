import {Appearance} from './appearance'
import {OriginalHuman} from './originalHuman'
import {Human} from './human'

export interface Inherit {
  Dad: OriginalHuman | Human
  Mom: OriginalHuman | Human
  familyName: string
  appearance: Appearance
}
