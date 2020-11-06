import Character from '../characters/character';
import Attack from './attack'

export default class MagicAttack implements Attack {
  public attack(self:Character,target:Character){
    console.log(`${self.name} casts magic and pierces throgh ${target.name}!`);
  }
}