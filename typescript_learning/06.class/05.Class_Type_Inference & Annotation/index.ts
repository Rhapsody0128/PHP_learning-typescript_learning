enum horseColor {White,Black,Brown,Grey,Rainbow};

class Horse{
  constructor(
    public name:string,
    public color:horseColor,
    public readonly type:string,
    private noise:string = 'meeeeeeeeEeeeeeeee~'
  ){}
  
  public makeNoise(){
    console.log(this.noise);
  }

  private infoText():string{
    return `It's ${this.name}, the ${horseColor[this.color]}${this.type}`
  }

  public info(){
    console.log(this.infoText());
  }
}

let horse = new Horse(`Martin`,horseColor.Black,'短腿馬')
console.log(horse.info());

let xhorse = new Horse('Martin',horseColor.Grey,'小隻馬')

// xhorse.color = 'red' !類型錯誤
// xhorse.isPet = true !新增屬性
// xhorse = null !直接複寫錯誤的值