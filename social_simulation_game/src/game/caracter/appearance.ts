interface BodyColor {
  R: number
  G: number
  B: number
}
export class Appearance implements BodyColor {
  public R: number
  public G: number
  public B: number
  constructor(
    public DadBlood: BodyColor,
    public MonBlood: BodyColor,
  ) {
    this.R = (DadBlood.R + MonBlood.R) / 2 + Math.floor(Math.random() * 20)
    this.G = (DadBlood.G + MonBlood.G) / 2 + Math.floor(Math.random() * 20)
    this.B = (DadBlood.B + MonBlood.B) / 2 + Math.floor(Math.random() * 20)
  }
}
