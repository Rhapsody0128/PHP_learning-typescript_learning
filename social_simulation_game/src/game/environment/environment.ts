import { Gender } from '../universal'
import { EnvironmentSystem } from './environmentSystem'

const Enviroment =  new EnvironmentSystem()

Enviroment.SetmaleOrFemaleSociety(Gender.male)

export { Enviroment }
