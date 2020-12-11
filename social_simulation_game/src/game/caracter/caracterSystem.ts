import { Human } from './human'
import { OriginalHuman } from './originalHuman'

interface CaracterFactory {
  createOriginalHuman(name: string): OriginalHuman
  bornHuman(name: string, Mon: Human, Dad: Human): Human
}

export class CaracterSystem implements CaracterFactory {
  public createOriginalHuman(name: string) {
    return new OriginalHuman(name)
  }
  public bornHuman(name: string, Mon: Human, Dad: Human) {
    return new Human(name, Mon, Dad)
  }
}
