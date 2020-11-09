import Weapon from './weapons'
import MagicAttack from '../abilities/magicAttack'
import Role from '../characters/role'

export default class BasicWand implements Weapon{
  public readonly name= 'Basic Wand';
  public attackStrategy = new MagicAttack()
  public availableRole = [Role.Warlock]
}