import Armour from './armour'
import Role from '../characters/role'

export default class BasicRobe extends Armour{
  public readonly name ='Basic Robe';
  public availableRoles = [
    Role.Warlock
  ];
}