import Equipments from './equipments'
import Role from '../characters/role'

export default interface Equipment{
  name:string;
  type:Equipments;
  availableRoles:Role[];
}