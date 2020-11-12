// node build/index.js

// 如果要在眾多類別中實踐近似但相異的行為，與其直接實踐（implement）出功能並使用一連串的敘述式進行演算法的切換，不如在父類別裡建立一個行為演算法的參考點（reference point），任何符合該參考點的演算法必須遵照某介面（interface）進行實踐的動作；父類別可以藉由在該參考點切換演算法，不需要經過一連串判斷流程，就可以達到功能相異的結果。

import Role from './characters/role.js'
import Character from './characters/character'

import Swordsman from './characters/swordsman'
import Warlock from './characters/warlock'

// 有工廠就不需要個別載入了
// import Dagger from './weaopns/dagger';
// import BasicWand from './weaopns/basicWand';
// import BasicSword from './weaopns/basicSword.js';

import Weapons from './weaopns/weapons';
import WeaponFactory from './weaopns/weaponFactory';

const weaponFactory = new WeaponFactory()

const Gary = new Swordsman('Gary');
const Jack = new Warlock('Jack');

Jack.attack(Gary)

const dagger = weaponFactory.createWeapon(Weapons.BasicSword);
Gary.equip(dagger)

Gary.attack(Gary)

