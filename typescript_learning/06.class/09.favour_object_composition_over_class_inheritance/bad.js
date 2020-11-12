// 錯誤的物件複合實踐

const canFight = (state)=>({
  fight:()=>{
    console.log(`${state.name} slashes at the foe !`);
    state.stamina--
  }
})

const canCast = (state) =>({
  cast:(spell)=>{
    console.log(`${state.name} casts ${spell} !`);
    state.mana--
  }
})

const fighter = (name) =>{
  let state={
    name,
    health:100,
    stamina:100
  }
  return Object.assign(state,canFight(state))
}

const mage = (name) =>{
  let state = {
    name,
    health:100,
    mana:100
  }
  return Object.assign(state,canCast(state))
}

let scorcher = mage('Scrocher')
scorcher.cast('fireball')
console.log(scorcher.mana);

let slasher = fighter("Slasher")
slasher.fight()
console.log(slasher.stamina);