<template lang="pug">
  .human
    .man(v-if="data.gender === '男性'")
      svg(id='man' data-name='man' width='100px' height="150px")
        path.manBody(d='M42.15,37.68C66.91,37.26,66.91.42,42.15,0,17.38.42,17.39,37.26,42.15,37.68Z')
        path.manBody.rightHand(d='M34.13,46.57,11,6.12C7.12-.52-2.81,5.66.76,11.9l23.43,41C27.54,58.78,37.6,52.65,34.13,46.57Z')
        path.manBody(d='M70.41,56.6v40c0,7.72-11.74,7.33-11.74,0v7h0v40a7.06,7.06,0,0,1-7.06,7.06H32.73a7.07,7.07,0,0,1-7.07-7.06V42.59a40,40,0,0,1,5.7-.2,25.87,25.87,0,0,0,21.57,0h3.35a13.7,13.7,0,0,1,2.39.21v.08A14.14,14.14,0,0,1,70.41,56.6Z')
</template>
<script lang="ts">
import { Human } from '@/game/caracter/human';
import Vue from 'vue'
export default Vue.extend({
  props: {
    data: Object,
  },
  mounted() {
    console.log(this.data);
    console.log(this.data.gender);
  },
})

</script>

<style lang="stylus" scoped>
.human{
  position relative
  .man{
    display inline
    svg{
      .manBody {
        transform translate(20%)
      }
      .rightHand{
        transform-origin 28px 48px
        transform translate(20%) rotate(-30deg)
      }
    }
  }
  &:hover{
    .rightHand{
      animation waving 1s infinite
    }
  }

}
@keyframes waving {
  0%{
    transform translate(20%) rotate(-30deg)
  }
  50%{
    transform translate(20%) rotate(0deg)
  }
  100%{
    transform translate(20%) rotate(-30deg)
  }
}

</style>