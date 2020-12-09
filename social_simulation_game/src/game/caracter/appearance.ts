type bodyColor = {
  R:number
  G:number
  B:number
}
class appearance implements bodyColor{
  public R:number
  public G:number
  public B:number
  constructor(
    public DadBlood:bodyColor,
    public MonBlood:bodyColor
  ){
    this.R = (DadBlood.R + MonBlood.R)/2
    this.G = (DadBlood.G + MonBlood.G)/2
    this.B = (DadBlood.B + MonBlood.B)/2
  }
}