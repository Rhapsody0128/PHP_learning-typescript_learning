import Role from './role'
import Character from './character'
// import MeleeAttack from '../abilities/meleeAttack';
// import BasicSword from '../weaopns/basicSword';
import SwordsmanEquipmentFactory from '../equipments/swordsmanEquipmentFactory'

export default class Swordsman extends Character{
  constructor(name:string){
    let SEF = new SwordsmanEquipmentFactory
    super(
      name,
      Role.Swordsman,
      SEF.createWeapon(),
      SEF.createArmour(),
    )
  }
}