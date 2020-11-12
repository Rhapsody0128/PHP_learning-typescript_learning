import Weapon from '../weaopns/weapon'
import Armour from '../armours/armour'

export default interface EquipmentFactory{
  createWeapon():Weapon;
  createArmour():Armour;
}