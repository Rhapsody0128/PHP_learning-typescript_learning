// node build/index.js

// 如果要在眾多類別中實踐近似但相異的行為，與其直接實踐（implement）出功能並使用一連串的敘述式進行演算法的切換，不如在父類別裡建立一個行為演算法的參考點（reference point），任何符合該參考點的演算法必須遵照某介面（interface）進行實踐的動作；父類別可以藉由在該參考點切換演算法，不需要經過一連串判斷流程，就可以達到功能相異的結果。

import Role from './characters/role.js'
import Character from './characters/character'

import Swordsman from './characters/swordsman'
import Warlock from './characters/warlock'
import Dagger from './weaopns/Dagger';
import BasicWand from './weaopns/basicWand';
import BasicSword from './weaopns/basicSword.js';
import StabAttack from './abilities/stabAttack.js';

const Gary = new Swordsman('Gary');
const Jack = new Warlock('Jack');

Gary.introduce()
Jack.introduce()

Gary.attack(Jack)
Jack.attack(Gary)

Gary.equip(new Dagger);
Gary.attack(Jack);

let swordUsingStab = new BasicSword
// 更變攻擊模式，但不依照武器
// 實現用同樣武器不同的攻擊策略
swordUsingStab.switchAttackStrategy(new StabAttack())

const Ame = new Swordsman('Ame')

Ame.equip(swordUsingStab)
Ame.attack(Gary)


// AbstractC 類別的宣稱方法
// abstract class AbstractC{

//   abstract Pabstract :Tp_abstract;
// 宣告成員變數

//   [public|private|protected] Prop:Tprop;
// 宣告父類別成員變數

//   abstract Mabstract():Tm_abstract_return;
// 宣告抽象成員方法;

//   [public|private|protected] Method():Tm_return{};
// 宣告父類別成員方法
// }
// 繼承了 AbstractC 的成員變數 Prop 與成員方法 Method 必須實踐成員變數 Pabstract 以及成員方法 Mabstract

// 1.抽象類別不能進行建立物件的動作：因為裡面的抽象成員是還未實踐的狀態，就算硬要從抽象類別建立物件，該物件也會是不完整狀態
// 2.根據前一點推斷：抽象類別生來就是要被繼承的
// 3.抽象類別裡的抽象成員（Abstract Member），由於要滿足介面的特性 —— 代表規格並且強迫繼承的子類別必須實踐功能，因此抽象成員必需被實踐為 public 模式