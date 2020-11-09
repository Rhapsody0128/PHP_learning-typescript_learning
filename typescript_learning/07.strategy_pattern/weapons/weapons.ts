import Attack from '../abilities/attack'
import Role from '../characters/role'

export default interface Weapon{
  readonly name:string;
  availableRole:Role[];
  attackStrategy:Attack
}