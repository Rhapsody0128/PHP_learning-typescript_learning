import Weapons from './weapons'
import Weapon from './weapon'

import BasicSword from './basicSword'
import BasicWand from './basicWand'
import Dagger from './dagger'

export default class WeaponFactory{
  public createWeapon(type:Weapons):Weapon{
    switch(type){
      case Weapons.BasicSword:return new BasicSword()
      case Weapons.BasicWand: return new BasicWand()
      case Weapons.Dagger:    return new Dagger()

      default:throw new Error(`${Weapon[type]} isn't registered!`)
    }
  }
}