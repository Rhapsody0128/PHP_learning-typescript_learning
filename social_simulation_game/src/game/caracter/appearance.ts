import {BodyColor} from './universal'

export class Appearance implements BodyColor {
  public R: number
  public G: number
  public B: number
  constructor(
    public DadBlood: BodyColor,
    public MonBlood: BodyColor,
  ) {
    this.R = (DadBlood.R + MonBlood.R) / 2
    this.G = (DadBlood.G + MonBlood.G) / 2
    this.B = (DadBlood.B + MonBlood.B) / 2
  }
}
