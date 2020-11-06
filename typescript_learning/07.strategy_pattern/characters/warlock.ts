import Role from './role'
import Character from './character'
import MagicAttack from '../abilities/magicAttack';

export default class Swordsman extends Character{
  constructor(name:string){
    super(name,Role.Warlock,new MagicAttack);
  }
}