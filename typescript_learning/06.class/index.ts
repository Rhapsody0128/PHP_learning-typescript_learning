enum Role {
  Swordsman = 'Swordsman' ,
  Warlock = 'Warlock',
  Highwaynan = 'Highwaynan',
  BountHunter = 'Bount Hunter'
}
interface ICharacter{
  name:string;
  role:Role
  attack(target:Character):void
}

class Character implements ICharacter {
  constructor(
    public name:string,
    public role:Role,
  ) {}
  public attack(target:ICharacter){
    let verb:string
  }
}

