<template lang="pug">
  .human
    .man(v-if="data.gender === '男性'")
      svg(id='man' data-name='man' width='110px' height="150px")
        path.manBody(:style="bodyColorStyle" d='M42.15,37.68C66.91,37.26,66.91.42,42.15,0,17.38.42,17.39,37.26,42.15,37.68Z')
        path.manBody.rightHand(:style="bodyColorStyle" d='M34.13,46.57,11,6.12C7.12-.52-2.81,5.66.76,11.9l23.43,41C27.54,58.78,37.6,52.65,34.13,46.57Z')
        path.manBody(:style="bodyColorStyle" d='M70.41,56.6v40c0,7.72-11.74,7.33-11.74,0v7h0v40a7.06,7.06,0,0,1-7.06,7.06H32.73a7.07,7.07,0,0,1-7.07-7.06V42.59a40,40,0,0,1,5.7-.2,25.87,25.87,0,0,0,21.57,0h3.35a13.7,13.7,0,0,1,2.39.21v.08A14.14,14.14,0,0,1,70.41,56.6Z')
    .woman(v-if="data.gender === '女性'")
      svg(id='woman' data-name='woman' width='110px' height="150px")
        path.womanBody(:style="bodyColorStyle" d='M178.33,290.77l-12.88-18.88,6.16,24.68a7.36,7.36,0,0,1-7.14,9.15H147.29v31.92a7.37,7.37,0,0,1-7.37,7.36H130.1a7.37,7.37,0,0,1-7.36-7.36V305.72H105.55a7.37,7.37,0,0,1-7.14-9.15l14.73-58.91a7.36,7.36,0,0,1,7.14-5.58h3.49a27,27,0,0,0,22.48,0h3.49a6.51,6.51,0,0,1,.77,0c2.33-.28,4.66.83,7,4.22l30.16,45.48C192.15,288.65,182.7,297.34,178.33,290.77Z' transform='translate(-81.48 -187.89)')
        path.womanBody.rightHand(:style="bodyColorStyle" d='M123.14,235.44,92.34,197.9c-5.17-6.15-14.29,1.93-9.53,7.73L114,243.7C118.5,249.13,127.77,241.08,123.14,235.44Z' transform='translate(-81.48 -187.89)')
        path.womanBody(:style="bodyColorStyle" d='M135,187.89a19.64,19.64,0,1,0,19.64,19.64A19.64,19.64,0,0,0,135,187.89Z' transform='translate(-81.48 -187.89)')



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
  .woman{
    display inline
    svg{
      .womanBody{
        // transform translate(1%)
      }
      .rightHand{
        transform-origin 28px 48px
      }
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