enum gender {male,female}
// ---世界設定
type worldStatus = {
  worldPeople:person[]
  worldPeopleCount:number
  nowAge:number
  marryRate:Number
}
// ---人參數
type person = {
  name:string
  gender:gender
  hasMarry:boolean
  childrenCount:number
  chirdren?:string[]
  age:number
  father?:string
  mother?:string
}
let Adam : person = {
  name:'Adam',
  gender:gender.male,
  hasMarry:false,
  childrenCount:0,
  age:17,
}
let Eve : person = {
  name:'Eve',
  gender:gender.female,
  hasMarry:false,
  childrenCount:0,
  age:15,
}


// let getMarry = function(){
//   world.map(person=>{
//     if(person.age > 18 && person.gender == gender.male && person.hasMarry == false){

//     }
//   })
// }
// let getOlder = function(){
//   world.map(person=>{
//     person.age++
//   })
// }

let TimeFlow = setInterval(() => {
  let random = function (ground:number) { return Math.floor(Math.random()*100+ground)}
  getOlder()
  if(random(0) > 20){
    
  }
}, 1000);