import Role from './role.js'
import Attack from '../abilities/attack'
import Weapon from '../weapons/weapons'

export default class Character{
  private attackRef:Attack
  constructor(
    public readonly name:string,
    public readonly role:Role,
    // private attackRef:Attack
    // 新增一個針對Attack功能的參考成員
    private weaponRef:Weapon
    // 不需要新增attackRef，因為攻擊方式由武器決定
  ){
    this.attackRef = this.weaponRef.attackStrategy
  }
  public introduce(){
    console.log(`
  Hi, My name is ${this.name}, I'm ${this.role}
    `);
  }
  public attack(target:Character){
    this.attackRef.attack(this,target);
  }

  public switchAttackStrategy(type:Attack){
    this.attackRef = type
  }

  public equip(weapon:Weapon){
    // const availableRoles:Role[]  = weapon.availableRole
    let availableRoles:Role[] = weapon.availableRole;
    if(
      availableRoles.length ===0 ||
      availableRoles.indexOf(this.role) !==-1
    ){
      console.log(`${this.name} has equipped ${weapon.name}!`);
      this.weaponRef = weapon
      this.attackRef = this.weaponRef.attackStrategy
    }else{
      throw new Error(`${this.role} cannot equip ${weapon.name}`)
    }
  }
}