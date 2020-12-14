<template lang="pug">
  #Home

    .forTesta
      .bar
        input(v-model="inputName")
        button(@click="createOriginalHuman(inputName)") 創造
        button(@click="bornHuman(inputName)") 出生
      .table
        table(border='2.5px')
          tr
            td 姓名
            td 性別
            td 婚姻
            td 年齡
            td 人物
            td 父親
            td 母親
          tr(v-for="(human,index) in worldHuman" :key="index")
            td {{human.fullName}}
            td {{human.gender}}
            td {{human.getMarry}}
            td {{human.age}}
            td 
              human(:data="worldHuman[index]")
            td {{human.Dad.fullName}}
            td {{human.Mom.fullName}}

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
      worldHuman: [new OriginalHuman(), new OriginalHuman()],
    }
  },
  methods: {
    createOriginalHuman(inputName: string) {
      const human = game.CaracterSystem.prototype.createOriginalHuman()
      this.worldHuman.push(human)
      this.inputName = ''
    },
    bornHuman() {
      const child = game.CaracterSystem.prototype.bornHuman('Gary', this.worldHuman[0], this.worldHuman[1])
      this.worldHuman.push(child)
      console.log(child.appearance.R);
      console.log(child.appearance.G);
      console.log(child.appearance.B);
    },
  },
})
</script>
<style lang="stylus">
  .forTest{
    display none
  }
  .bar{
    position fixed
    transform translate(-50%,-50%)
    left 50%
    top 50%
  }
</style>