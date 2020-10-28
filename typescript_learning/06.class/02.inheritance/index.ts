
// 存取修飾子總共分為三種模式：public、private 以及 protected
// 若宣告某類別 C，則裡面的成員變數 P 或成員方法 M 被註記為：
// public 模式時：P 與 M 可以任意在類別內外以及繼承 C 的子類別使用
// private 模式時：P 與 M 僅僅只能在當前類別 C 內部使用
// protected 模式時： P 與 M 除了當前類別 C 內部使用外，繼承 C 的子類別也可以使用

enum TransortTicketType {
  Train,
  MRT,
  Plane,
  Bus
}
type TimeFormat = [number,number,number]

class TicketSystem {
  constructor(
    private type:TransortTicketType,
    protected startingPoint:string,
    protected destination:string,
    private departureTime:Date,
  ) {}

  protected deriveDuration () :TimeFormat{
    return [1,0,0];
  }
  private deriveArrivalTime():Date{
    const {departureTime} = this;
    const [hours,minutes,seconds] = this.deriveDuration();
    const durationSeconds = hours *60*60 + minutes*60 +seconds;
    const durationMilliseconds = durationSeconds * 1000

    const arrivalMilliseconds = departureTime.getTime() + durationMilliseconds;
    return new Date(arrivalMilliseconds)
  }

  public getTickerInfo(){
    const ticketName = TransortTicketType[this.type]
    const arrivalTime = this.deriveArrivalTime();

    console.log(`
    Ticket Type:${ticketName}
    Station:${this.startingPoint} - ${this.destination}
    Departure:${this.departureTime}
    Arrival:${arrivalTime}
    `);
  }

} 

type TrainStaion = {
  name:string,
  nextStop:string,
  duration:TimeFormat,
}

class TrainTicket extends TicketSystem{
  private stops :string [] = [
    'pingtung',
    'Kaohsiung',
    'Tainan',
    'Taichung',
    'Hsinchu',
    'Taipei'
  ];
  private trainStationsDetail:TrainStaion[]=[
    {name:'pingtung',nextStop:'Kaohsiung',duration:[2,30,0]},
    {name:'Kaohsiung',nextStop:'Tainan',duration:[1,30,0]},
    {name:'Tainan',nextStop:'Taichung',duration:[2,15,15]}
  ];

  private isStopExist(stop:string):boolean{
    for(let i =0;i<this.stops.length;i++){
      const existedStop = this.stops[i];
      if(existedStop === stop) return true;
    }
    return false;
  }

  protected deriveDuration():TimeFormat{
    
    const {startingPoint,destination } = this;
    if(this.isStopExist(startingPoint)&&this.isStopExist(destination)){
      let time:TimeFormat = [0,0,0]
      let stopFound = false
    for(let i = 0 ;i<this.trainStationsDetail.length;i++){
      const detail = this.trainStationsDetail[i]
      if(!stopFound && detail.name === startingPoint){
        stopFound = true;
        time[0]+=detail.duration[0]
        time[1]+=detail.duration[1]
        time[2]+=detail.duration[2]
      }else if(stopFound){
        time[0]+=detail.duration[0]
        time[1]+=detail.duration[1]
        time[2]+=detail.duration[2]
        if(detail.nextStop === destination) break;
      }
    }
    let minutes = Math.floor(time[2]/60);
    time[1]+=minutes;
    time[2]+=minutes*60;

    let hours = Math.floor(time[1]/60);
    time[0] += hours
    time[1]-=hours*60

    return time
    }
    throw new Error('Worng stop name,please check again')
  }
}

// 繼承
// class C {
//   public a:string='a';
//   private b:string='b';
//   protected c:string='c';

//   public d(value:string){console.log('object')};
//   private e(value:string){console.log('object')};
//   protected f(value:string){console.log('object')} ;
// }
// class D extends C {}
// let E = new D 

// console.log(E.a);
// console.log(E.b);
// console.log(E.c);
// E.d('a')
// E.e('a')
// E.f('a')



