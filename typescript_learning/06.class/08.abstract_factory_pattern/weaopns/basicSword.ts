
import Weapon from './weapon'
import MeleeAttack from '../abilities/meleeAttack'
import Role from '../characters/role'

export default class BasicSword extends Weapon{
  public readonly name ='Basic Sword';
  public availableRoles = [
    Role.Highwaynan,
    Role.Swordsman
  ];
  public attackStrategy = new MeleeAttack()
}