import Role from './role'
import Character from './character'
// import MeleeAttack from '../abilities/meleeAttack';
import BasicWand from '../weaopns/basicWand';

export default class Swordsman extends Character{
  constructor(name:string){
    super(name,Role.Warlock,new BasicWand);
  }
}