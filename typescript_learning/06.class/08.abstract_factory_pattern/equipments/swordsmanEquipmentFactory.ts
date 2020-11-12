import EquipmentFactory from './equipmentFactory'
import BasicSword from '../weaopns/basicSword'
import BasicArmour from '../armours/basicArmour'

export default class SwordsmanEquipmentFactory implements EquipmentFactory{
  public createWeapon(){
    return new BasicSword
  }
  public createArmour(){
    return new BasicArmour
  }
}