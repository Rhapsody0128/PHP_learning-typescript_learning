<template lang="pug">
  .human
    .man(v-if="data.gender === '男性'")
      svg(id='man' data-name='man' width="100" height="110")
        path.body(:style="bodyColorStyle" d='M30.16,27c17.7-.3,17.7-26.7,0-27C12.46.3,12.46,26.7,30.16,27Z')
        path.body.rightHand(:style="bodyColorStyle" d='M24.46,33.36l-16.6-29C5.06-.44-2,4.06.56,8.46l16.8,29.4C19.66,42.1,26.86,37.7,24.46,33.36Z')
        path.body(:style="bodyColorStyle" d='M50.46,40.6V69.3c0,5.5-8.4,5.2-8.4,0v5h0V103a5.12,5.12,0,0,1-5.1,5.1H23.46a5.12,5.12,0,0,1-5.1-5.1V30.6a28.08,28.08,0,0,1,4.1-.1,19,19,0,0,0,15.5,0h2.4c.6,0,1.1.1,1.7.1v.1A10,10,0,0,1,50.46,40.6Z')
    .woman(v-if="data.gender === '女性'")
      svg(id='woman' data-name='woman' width="100" height="110")
        path.body(:style="bodyColorStyle" d='M66.6,70.7l-8.9-13,4.2,17a5.31,5.31,0,0,1-4.1,6.2,2.2,2.2,0,0,1-.8.1H45.2v21.9a5.12,5.12,0,0,1-5.1,5.1H33.4a5.12,5.12,0,0,1-5.1-5.1V81H16.5a5.12,5.12,0,0,1-5.1-5.1,5,5,0,0,1,.2-1.2L21.7,34.2a5.13,5.13,0,0,1,4.9-3.8H29a19,19,0,0,0,15.5,0h2.9c1.6-.2,3.2.6,4.8,2.9L72.9,64.6C76.1,69.3,69.6,75.2,66.6,70.7Z' transform='translate(-0.01 0)')
        path.body.rightHand(:style="bodyColorStyle" d='M28.7,32.7,7.5,6.9C3.9,2.7-2.3,8.2.9,12.2L22.4,38.4C25.5,42.1,31.9,36.6,28.7,32.7Z' transform='translate(-0.01 0)')
        path.body(:style="bodyColorStyle" d='M36.9,0A13.45,13.45,0,1,0,37,0Z' transform='translate(-0.01 0)')





</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return{
      bodyColorStyle: {fill: `rgb(${this.data.appearance.R},${this.data.appearance.G},${this.data.appearance.B})`},
    }
  },
  props: {
    data: Object,
  },
})

</script>

<style lang="stylus" scoped>
.human{
  position relative
  .man{
    .body{
      transform translate(21%,3%)
    }
    .rightHand{
      transform-origin 26px 32px
      transform translate(21%,3%) rotate(0deg)
    }
    &:hover{
      .rightHand{
        animation manWaving 0.7s infinite
      }
    }
  }
  .woman{
    .body{
      transform translate(12%,3%)
    }
    .rightHand{
      transform-origin 26px 32px
      transform translate(12%,3%) rotate(0deg)
    }
    &:hover{
      .rightHand{
        animation womanWaving 0.7s infinite
      }
    }
  }
}

@keyframes womanWaving {
  0%{
    transform translate(12%,3%) rotate(0deg)
  }
  50%{
    transform translate(12%,3%) rotate(-30deg)
  }
  100%{
    transform translate(12%,3%) rotate(0deg)
  }
}

@keyframes manWaving {
  0%{
    transform translate(21%,3%) rotate(0deg)
  }
  50%{
    transform translate(21%,3%) rotate(-30deg)
  }
  100%{
    transform translate(21%,3%) rotate(0deg)
  }
}
</style>