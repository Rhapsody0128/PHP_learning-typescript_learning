import Character from "../characters/character";

export default interface Attack{
  attack(self:Character,target:Character):void;
}