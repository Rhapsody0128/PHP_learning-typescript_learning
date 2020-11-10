import Character from '../characters/character';
import Attack from './attack'

export default class MeleeAttack implements Attack {
  public attack(self:Character,target:Character){
    console.log(`${self.name} strikes ${target.name} with big Sword!`);
  }
}