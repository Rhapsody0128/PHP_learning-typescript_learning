enum Role {
  Swordsman = 'Swordsman' ,
  Warlock = 'Warlock',
  Highwaynan = 'Highwaynan',
  BountyHunter = 'Bounty Hunter',
  Monster = 'Monster'
}
interface ICharacter{
  name:string;
  role:Role
  attack(target:Character):void
}

interface IStats {
  health:number;
  mana:number;
  strength:number;
  defense:number;
}

class Character implements ICharacter,IStats {
  public health:number = 50
  public mana:number = 10
  public strength:number = 10
  public defense:number = 5
  constructor(
    public name:string,
    public role:Role,
    
  ) {}
  public attack(target:ICharacter){
    let verb:string
    switch(this.role){
      case Role.Swordsman:   verb = 'attacking'; break;
      case Role.Warlock:     verb = 'cursing'; break;
      case Role.Highwaynan:  verb = 'ambushing'; break;
      case Role.BountyHunter:verb = 'threatening'; break;
      case Role.Monster:     verb = 'crab';break
      default:throw new Error(`${this.role} didn't exist`)
    }
    console.log(`${this.name} is ${verb} ${target.name}`);
  }
}

class Monster implements ICharacter{
  public role = Role.Monster;

  constructor(public name:string){}

  public attack(target:ICharacter){
    console.log(`${this.name} is attacking the ${target.role}-${target.name}`);
  }
}

let Gary = new Character('Gary',Role.BountyHunter)
let Jack = new Character('Jack',Role.Swordsman)

Gary.attack(Jack)
Jack.attack(Gary)

// 若已宣告類別 C 與介面 I，其中 C 想要對 I 進行綁定的動作，必須使用 implements 關鍵字。
// 一但 C 綁定了 I，則類別 C 必須要實踐出介面 I 裡面的所有規格成員。
// 一個子類別一次只能繼承一個父類別；然而，一個類別可以跟多個介面進行綁定。

let caracter = new Character('Sam',Role.Highwaynan);
let certainlyACharacter: ICharacter = new Character('Kim',Role.Swordsman)

caracter.name
caracter.health
certainlyACharacter.name
// certainlyACharacter.health ! 註記為ICharacter 但是Icharacter沒有health屬性

let aHumanCharacter = new Character('Gary',Role.Highwaynan)
let aMonster = new Monster('Slime')
aHumanCharacter.attack(aMonster)
aMonster.attack(Gary)

class BountyHunter extends Character {
  public hostages:ICharacter[]=[]
  constructor(name:string){
    super(name,Role.BountyHunter);
  }
  public capture(target:ICharacter,successRate:number){
    const randomNumber = Math.random()
    let message:string;
    let targerTilte = `${target.name} the ${target.role}`;
    if(randomNumber>(1-successRate)){
      this.hostages = [...this.hostages,target];
      message = `${this.name} has captured ${targerTilte}`
    }else{
      message = `${this.name} failed to capture ${targerTilte}`
    }
    console.log(message);
  }
  public sellHostages(){
    const totalPrice = this.hostages.length *1000;
    const hostagesInfo = this.hostages.map((hostage)=>`${hostage.name} the ${hostage.role}`).join('\n\b\b');

    console.log(`${this.name} sells all the hostages, including:
    ${hostagesInfo}

    Receive Gold: ${totalPrice}
    `);
    this.hostages = []
  }
}
let Gon = new BountyHunter('Gon')

let JunkMonster = new Character('JunkMonster',Role.Monster)
let JunkB = new Character('JunkB',Role.Highwaynan)
let JunkC = new Character('JunkC',Role.Highwaynan)

Gon.capture(JunkMonster,1)
Gon.capture(JunkB,0.5)
Gon.capture(JunkC,0.1)
Gon.attack(Gary)
Gon.capture(Gary,0.4)
Gon.capture(Jack,0.8)
JunkMonster.attack(Jack)
JunkB.attack(Gary)
Gon.sellHostages()

// let unknowPerson:ICharacter = new BountyHunter('chu');
// unknowPerson.capture(Gary,0.4) ! unknowPerson 被註記為 ICharacter基本型的沒辦法使用獵人的技能
