
import Weapons from './weapon'
import MagicAttack from '../abilities/magicAttack'
import Attack from '../abilities/attack'
import Character from '../characters/character'
import Role from '../characters/role'

export default class BasicSword extends Weapons{
  public readonly name ='Basic Wand';
  public availableRoles = [
    Role.Warlock
  ];
  public attackStrategy = new MagicAttack
  // public switchAttackStrategy(type:Attack){
  //   this.attackStrategy = type
  // }
  // 由副類別提供attackStrategy和attack的methods
  // public attack (self:Character,target:Character){
  //   this.attackStrategy.attack(self,target)
  // }
  // 藉由attackStrategy參考點呼叫attack方法:
  // 由於本類別不是Character，因此必須傳遞兩個分別代表主角
  // 本身以及被攻擊對象的Character物件來實現攻擊功能
}