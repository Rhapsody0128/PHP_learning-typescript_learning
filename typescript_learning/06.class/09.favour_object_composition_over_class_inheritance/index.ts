class myWindow {
  public readonly shape = "Rectangular"
  constructor(
    public width:number,
    public hegiht:number
  ){}

  public area(){
    return this.width * this.hegiht;
  }

  public cirecumference(){
    return 2 * (this.width + this.hegiht);
  }
}

let AWindow = new myWindow(50,100)
console.log(AWindow);
console.log(AWindow.area());
console.log(AWindow.cirecumference());

// 如果視窗是圓形或長方形，最粗糙的手法就是---分別宣告Rectangle和Circle並綁定同一種介面Geometry

interface Geometry{
  area():number;
  circumference():number;
}

class Rectangle implements Geometry {
  constructor(public width:number,public height:number){}
  public area(){return this.width * this.height;}
  public circumference(){return 2 *(this.width + this.height)}
}

class Circle implements Geometry {
  public static PI = 3.14
  constructor(public radius:number){}
  public area(){return this.radius**2 * Circle.PI;}
  public circumference(){return 2 *this.radius * Circle.PI}
}



// 然後再進行繼承的動作，變成 RectangularWindow 與 CircularWindow：

class RectangularWindow extends Rectangle{
  public readonly shape = 'Rectangle'
}
class CircularWindow extends Circle{
  public readonly shape = 'Circle'
}

// 缺點:
// 1.要如何能夠只宣告一個 MyWindow 類別，但又能同時指定為 Rectangle 或者是 Circle 形狀的視窗呢？
// 2.就算指定了幾何形狀，因為長方形跟圓形計算面積或周長的過程也都不ㄧ樣， 一個是需要長度 width 與寬度 height；另一個則是半徑 radius 還有 Circle.PI 這個靜態成員。
// -----------------------------------
// 改用物件委任（Delegation）:

class MyWindow {
  constructor(public geometry:Geometry) {}

  public area(){
    return this.geometry.area()
  }
  public circumference(){
    return this.geometry.circumference()
  }
}

let rectWindow = new MyWindow(new Rectangle(50,100))
console.log(`長方形的面積${rectWindow.area()}`);
console.log(`長方形的邊長${rectWindow.circumference()}`);

let circleWindow = new MyWindow(new Circle(10))
console.log(`圓形的面積${circleWindow.area()}`);
console.log(`圓形的周長${circleWindow.circumference()}`);
