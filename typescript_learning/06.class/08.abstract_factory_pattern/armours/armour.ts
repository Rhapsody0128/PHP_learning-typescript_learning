import Equipments from '../equipments/equipments'
import Equipment from '../equipments/equipment'
import Role from '../characters/role'


export default abstract class Armour implements Equipment{
  abstract name :string;
  public type = Equipments.Armour
  abstract availableRoles:Role[]
}