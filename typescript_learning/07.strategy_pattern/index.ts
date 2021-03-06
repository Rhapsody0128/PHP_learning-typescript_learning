// 如果要在眾多類別中實踐近似但相異的行為，與其直接實踐（implement）出功能並使用一連串的敘述式進行演算法的切換，不如在父類別裡建立一個行為演算法的參考點（reference point），任何符合該參考點的演算法必須遵照某介面（interface）進行實踐的動作；父類別可以藉由在該參考點切換演算法，不需要經過一連串判斷流程，就可以達到功能相異的結果。

import Role from './characters/role.js'
import Character from './characters/character'

import Swordsman from './characters/swordsman'
import Warlock from './characters/warlock'
import MeleeAttack from './abilities/meleeAttack.js';
import StabAttack from './abilities/stabAttack.js';

import BasicSwords from './weapons/basicSwords'
import BasicWand from './weapons/basicWand'
import Dagger from './weapons/dagger'

const Gary = new Swordsman('Gary');
const Jack = new Warlock('Jack');

Gary.introduce()
Jack.introduce()




// MeleeAttack
Gary.attack(Jack)
Jack.attack(Gary)

Gary.switchAttackStrategy(new StabAttack())

Gary.attack(Jack)

Gary.equip(new BasicSwords())

Gary.attack(Gary)

Jack.equip(new Dagger())

Jack.attack(Gary)

try{
  Gary.equip(new BasicWand())
}catch(err){
  console.log(err);
}
