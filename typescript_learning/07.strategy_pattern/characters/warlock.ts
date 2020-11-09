import Role from './role'
import Character from './character'
// import MagicAttack from '../abilities/magicAttack';
import BasicWand from'../weapons/basicWand'

export default class Swordsman extends Character{
  constructor(name:string){
    super(name,Role.Warlock,new BasicWand);
  }
}