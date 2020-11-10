import Role from './role.js'
import Weapon from '../weaopns/weapon'

export default class Character{
  constructor(
    public readonly name:string,
    public readonly role:Role,
    // private attackRef:Attack
    // 新增一個針對Attack功能的參考成員
    // 不需要新增attackRef，因為攻擊方式由武器決定
    private weaponRef:Weapon
  ){}
  public introduce(){
    console.log(`
  Hi, My name is ${this.name}, I'm ${this.role}
    `);
  }
  // public attack(target:Character){
  //   this.attackRef.attack(this,target);
  // }

  // public switchAttackStrategy(type:Attack){
  //   this.attackRef = type
  // }
  public equip(weapon:Weapon){
    const {availableRoles:roles}=weapon;
    if(roles.length ===0 || roles.indexOf(this.role)!==-1){
      this.weaponRef = weapon;
    }else{
      throw new Error(`${this.role} cannot equip ${weapon.name} !`)
    }
  }
  public attack(target : Character){
    this.weaponRef.attack(this,target)
  }
}
