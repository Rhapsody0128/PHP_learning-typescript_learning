<template lang="pug">
  #Home
    input(v-model="inputName")
    button(@click="createOriginalHuman(inputName)") 創造
    button(@click="bornHuman(inputName)") 出生
    
    div
      table(border='2.5px')
        tr
          td 姓名
          td 性別
          td 婚姻
          td 年齡
          td 父母
          td 人物
        tr(v-for="(human,index) in worldHuman" :key="index")
          td {{human.name}}
          td {{human.gender}}
          td {{human.getMarry}}
          td {{human.age}}
          td {{human.Dad}},{{human.Mom}}
          td 
            human(:data="worldHuman[index]")
      
</template>
<script lang="ts">
import { Human } from '@/game/caracter/human'
import { OriginalHuman } from '@/game/caracter/originalHuman'
import Vue from 'vue'
import game from '../game/index'

export default Vue.extend({
  data() {
    return{
      inputName: '',
      index: 0,
      worldHuman: [new OriginalHuman('亞當'), new OriginalHuman('夏娃')],
    }
  },
  methods: {
    createOriginalHuman(inputName: string) {
      const human = game.CaracterSystem.prototype.createOriginalHuman(inputName)
      this.worldHuman.push(human)
      this.inputName = ''
    },
    // bornHuman(){}
  },
})
</script>