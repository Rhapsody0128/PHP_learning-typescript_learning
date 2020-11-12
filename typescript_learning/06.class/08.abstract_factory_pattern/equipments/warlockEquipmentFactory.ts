import EquipmentFactory from './equipmentFactory'
import BasicWand from '../weaopns/basicWand'
import BasicRobe from '../armours/basicRobe'

export default class warlockEquipmentFactory implements EquipmentFactory{
  public createWeapon(){
    return new BasicWand
  }
  public createArmour(){
    return new BasicRobe
  }
}