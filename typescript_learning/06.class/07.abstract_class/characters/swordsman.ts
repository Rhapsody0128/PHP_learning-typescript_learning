import Role from './role'
import Character from './character'
// import MeleeAttack from '../abilities/meleeAttack';
import BasicSword from '../weaopns/basicSword';

export default class Swordsman extends Character{
  constructor(name:string){
    super(name,Role.Swordsman,new BasicSword);
  }
}