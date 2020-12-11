import { Human } from './human'
import { OriginalHuman } from './originalHuman'

interface CaracterFactory {
  createOriginalHuman(name: string): OriginalHuman
  bornHuman(name: string, Mom: Human|OriginalHuman, Dad: Human|OriginalHuman): Human
}

export class CaracterSystem implements CaracterFactory {
  public createOriginalHuman(name: string) {
    return new OriginalHuman(name)
  }
  public bornHuman(name: string, Mom: Human|OriginalHuman, Dad: Human|OriginalHuman) {
    return new Human(name, Mom, Dad)
  }
}
