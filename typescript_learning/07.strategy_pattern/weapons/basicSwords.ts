import Weapon from './weapons'
import MeleeAttack from '../abilities/meleeAttack'
import Role from '../characters/role'

export default class BasicSword implements Weapon{
  public readonly name= 'Basic Sword';
  public attackStrategy = new MeleeAttack()
  public availableRole = [Role.Swordsman,Role.Highwaynan]
}