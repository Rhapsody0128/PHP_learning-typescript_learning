import { Gender } from '../universal'
import { EnvironmentStanderd } from './environmentStanderd'

export interface EnvironmentSetting {
  SetmaleOrFemaleSociety(value: Gender): Gender
}

export class EnvironmentSystem implements EnvironmentSetting, EnvironmentStanderd {
  public maleOrFemaleSociety: Gender
  constructor() {
    this.maleOrFemaleSociety = Gender.none
  }
  public SetmaleOrFemaleSociety(value: Gender) {
    this.maleOrFemaleSociety = value
    return value
  }
}
