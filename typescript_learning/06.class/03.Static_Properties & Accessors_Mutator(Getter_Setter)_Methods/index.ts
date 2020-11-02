
class CircleGeometry{
  private PI:number = 3.14;
  
  constructor(public radius:number){}

  public area():number{
    return this.PI * (this.radius **2)
  }

  public circumference():number{
    return 2 * this.PI * this.radius
  }
}

const myCircle = new CircleGeometry(2)

console.log(myCircle.area());

console.log(myCircle.circumference());


class StaticCircleGeometry{
  static PI:number = 3.14;
  
  constructor(public radius:number){}

  static area(radius:number):number{
    return StaticCircleGeometry.PI * (radius **2)
  }

  static circumference(radius:number):number{
    return 2 * StaticCircleGeometry.PI * radius
  }
}

const circleObj = new CircleGeometry(2);

const areaFromObj = circleObj.area();

const circumferenceFromObj = circleObj.circumference();

const areaFromStaticMethod = StaticCircleGeometry.area(2);

const circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2);

console.log(`
  Using CircleGeometry Class calculate radius 2 case:
  Area:         ${areaFromObj}
  Circumference:${circumferenceFromObj}

  Using StaticCircleGeometry Class calculate radius 2 case:
  Area:         ${areaFromStaticMethod}
  Circumference:${circumferenceFromStaticMethod}
`);


// class CircleGeometryV2{
//   private PI:number = 3.14;

//   public area: number
  
//   constructor(public radius:number){
//     this.area = this.PI * (radius**2)
//   }

//   public circumference():number{
//     return 2 * this.PI * this.radius
//   }
// }

// const randomCircle = new CircleGeometryV2(2);

// console.log(randomCircle.area);

// 我們可以直接用 randomCircle.area = 某數字 來強行覆寫掉面積的值，使得計算結果被破壞掉
// 因此會考慮使用Accessors:
// (儘管在 JS 裡將 Accessors 存取方法分別稱為 Getter/Setter Methods（取值/存值）；然而某部分語言會將 Accessors 代表取值方法，而 Mutators 則是代表存值方法 —— 因此不是用 Getter/Setter 名稱之分，而是以 Accessor/Mutator 這樣的名稱來分。)

class CircleGeometryV2{
  private PI:number = 3.14;
  
  constructor(public radius:number){}

  get area():number{
    return this.PI * (this.radius **2)
  }

  // get area2(value:number){
  //   return this.PI * (this.radius **2)
  // } !get Accessor不能用任何參數

  // get area3(){}
  // !get Accessor不能沒回傳值

  set area(value:number){
    this.radius = (value/this.PI)**0.5
  }

  public circumference():number{
    return 2 * this.PI * this.radius
  }
}

const randomCircle = new CircleGeometryV2(2)
console.log(randomCircle.area);
// 用getter methods 的屬性是唯獨
// randomCircle.area = 151 !
randomCircle.radius = 3
console.log(randomCircle.area);

const randomCircle2 = new CircleGeometryV2(2)
console.log(randomCircle2.radius);
console.log(randomCircle2.area);
randomCircle2.area = 3.14*(9941**2);
console.log(randomCircle2.radius);

