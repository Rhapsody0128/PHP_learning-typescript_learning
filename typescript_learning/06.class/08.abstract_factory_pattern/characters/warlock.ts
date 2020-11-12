import Role from './role'
import Character from './character'
// import MeleeAttack from '../abilities/meleeAttack';
// import BasicWand from '../weaopns/basicWand';
import WarlockEquipmentFactory from '../equipments/warlockEquipmentFactory'

export default class Swordsman extends Character{
  constructor(name:string){
    let WEF = new WarlockEquipmentFactory
    super(
      name,
      Role.Swordsman,
      WEF.createWeapon(),
      WEF.createArmour(),
    )
  }
}