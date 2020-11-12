import Armour from './armour'
import Role from '../characters/role'

export default class BasicArmour extends Armour{
  public readonly name ='Basic Armour';
  public availableRoles = [
    Role.Swordsman,
    Role.Highwaynan,
    Role.BountyHunter
  ];
}