class Fighter{
  public health = 100
  public stamina = 100
  constructor(public name : string){}
}
class Mage{
  public health = 100
  public mana = 100
  constructor(public name : string){}
}

class FighterCanFight extends Fighter{
  constructor(name:string) {
    super(name)
  }
  public fight(){
    console.log(`${this.name} slashes at the foe !`);
    this.stamina--
  }
}

class MageCanCast extends Mage {
  constructor(name:string) {
    super(name);
  }
  public cast(spell:string){
    console.log(`${this.name} casts ${spell} !`);
    this.mana--
  }
}