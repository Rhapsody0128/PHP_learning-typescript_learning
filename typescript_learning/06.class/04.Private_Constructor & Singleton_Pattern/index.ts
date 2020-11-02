class SinglotonPerson {
  private constructor(
    public readonly name:string,
    public readonly age:number,
    public readonly haspet:boolean,
  ){}
  
  private static Instance:SinglotonPerson = new SinglotonPerson('Gary',20,false);

  static getInstance():SinglotonPerson{return this.Instance}
}

const person = SinglotonPerson.getInstance()

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.haspet);

class SingletonC {
  private constructor(){}

  private static Instance:SingletonC = new SingletonC();

  static getInstance():SingletonC{return this.Instance}
}

class LazySingletonPerson{
  private constructor(
    public readonly name:string,
    public readonly age:number,
    public readonly haspet:boolean
  ) {}

  private static Instance :LazySingletonPerson|null = null;

  static getInstance():LazySingletonPerson{
    if(this.Instance === null){
      this.Instance = new LazySingletonPerson('gary',20,false);
    }
    return this.Instance
  }
}
console.log(LazySingletonPerson.getInstance());
