
import Weapons from './weapon'
import StabAttack from '../abilities/stabAttack'
import Attack from '../abilities/attack'
import Character from '../characters/character'
import Role from '../characters/role'

export default class BasicSword implements Weapons{
  public readonly name ='Dagger';
  public availableRoles = [];
  public attackStrategy = new StabAttack
  public switchAttackStrategy(type:Attack){
    this.attackStrategy = type
  }
  public attack (self:Character,target:Character){
    this.attackStrategy.attack(self,target)
  }
  // 藉由attackStrategy參考點呼叫attack方法:
  // 由於本類別不是Character，因此必須傳遞兩個分別代表主角
  // 本身以及被攻擊對象的Character物件來實現攻擊功能
}