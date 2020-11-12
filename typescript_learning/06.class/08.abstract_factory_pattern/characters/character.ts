import Role from './role.js'
import Weapon from '../weaopns/weapon'
import Armour from '../armours/armour'
import Equipment from '../equipments/equipment'

export default class Character{
  constructor(
    public readonly name:string,
    public readonly role:Role,
    // private attackRef:Attack
    // 新增一個針對Attack功能的參考成員
    // 不需要新增attackRef，因為攻擊方式由武器決定
    private weaponRef:Weapon,
    private armourRef:Armour
  ){}


  public introduce(){
    console.log(`
  Hi, My name is ${this.name}, I'm ${this.role}
    `);
  }
  public equip(equipment:Equipment){
    const {availableRoles:roles} = equipment;
    // 屬性賦值語法
    // const { a: aa, b: bb } = { a: 5, b: 10 } 
    // //a = 5, b=10
    
    if(roles.length ===0 || roles.indexOf(this.role)!==-1){
      if(equipment instanceof Weapon){
        this.weaponRef = equipment;
      }else if(equipment instanceof Armour){
        this.armourRef = equipment
      }
    }else{
      throw new Error(`${this.role} cannot equip ${equipment.name} !`)
    }
    console.log(`
    ${this.name} has equipped a ${equipment.type} - ${equipment.name}
    `);
  }
  public attack(target : Character){
    this.weaponRef.attack(this,target)
  }
}
