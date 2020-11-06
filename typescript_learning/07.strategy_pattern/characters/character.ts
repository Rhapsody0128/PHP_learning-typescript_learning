import Role from './role.js'
import Attack from '../abilities/attack'

export default class Character{
  constructor(
    public readonly name:string,
    public readonly role:Role,

    private attackRef:Attack
    // 新增一個針對Attack功能的參考成員
  ){}
  public introduce(){
    console.log(`
  Hi, My name is ${this.name}, I'm ${this.role}
    `);
  }
  public attack(target:Character){
    this.attackRef.attack(this,target)
  }
}