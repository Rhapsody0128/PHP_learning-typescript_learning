import Weapon from './weapons'
import StabAttack from '../abilities/stabAttack'
import Role from '../characters/role'

export default class BasicWand implements Weapon{
  public readonly name= 'Basic Wand';
  public attackStrategy = new StabAttack()
  public availableRole = []
}