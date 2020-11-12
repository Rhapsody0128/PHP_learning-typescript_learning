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

// 錯就錯在一開始 —— 介面設計本身就很有問題
// 回歸 Fighter 與 Mage，設計遊戲角色時，試著想想看，我們會將角色的每個屬性刻意訂得不一樣嗎？ —— Figher 擁有 stamina，而 Mage 則是對應 mana。

// 解法一：統一規範 Character 介面，每個角色皆擁有 stamina 與 mana 屬性，但數值可以客製化。

// 解法二：

// 統一規範 Character，但是設置一個名為 characterStatRef 做為參考點，另外定義 State 介面並延伸出 FighterStat 與 MageStat，然後進行物件的委任（Delegation）
// 不要直接對內部修改屬性，而是統一 attack 介面，再分別定義不同的策略，例如 DirectAttack 或 CastingAttack