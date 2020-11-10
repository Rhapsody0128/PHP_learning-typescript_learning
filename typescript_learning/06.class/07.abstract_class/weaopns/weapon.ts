import Attack from '../abilities/attack'
import MeleeAttack from '../abilities/meleeAttack';
import Character from '../characters/character'
import Role from '../characters/role'

export default abstract class Weapon{
// *介面的特點：一但跟介面進行綁定的動作，TypeScript 會針對沒有被實踐到的規格進行監控的動作
// *類別的特點：定義物件的完整藍圖與實踐過程
// 如果想要兼顧介面與類別的優勢 —— 繼承父類別的同時，也能夠彈性地宣告規格，而非直接實踐出過程，則可以選擇使用抽象類別（Abstract Class）。
  abstract name :string;
  abstract availableRoles:Role[];
  abstract attackStrategy= new MeleeAttack;
  public switchAttackStrategy(type:Attack){
    this.attackStrategy = type
  }
  public attack(self:Character,target:Character){
    this.attackStrategy.attack(self,target)
  }
}