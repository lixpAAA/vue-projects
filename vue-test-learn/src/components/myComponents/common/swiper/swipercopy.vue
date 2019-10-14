<template>
  <div class="wrap">
     <div class="wrap-absolute">
         <transition-group tag="ul" name="image">
             <li v-for="(item, index) in imgData" :key="item.src" v-show="currentIndex==index">
             <!-- <li> -->
                 <a :href="item.link">
                   <img :src="item.src" alt="">
                 </a>
             </li>
         </transition-group>
     </div>
         <div class="dot-wrap" :style="{width: dotWrapWidth, left: dotWrapLeft}">
             <ul>
                 <li v-for="(item, index) in imgData.length" :key="item"><span :class="{'dot-active': currentIndex==index, 'dot-default': currentIndex!=index}"/></li>
             </ul>
         </div>
  </div>
</template>

<script>
export default {
    name: 'swiper',
    props: {
        imgData: {
            default: ()=> {return []},
            type: Array
        }
    },
    data() {
        return {
            currentIndex: 0,
            timer: null
        }
    },
    created() {
       
    },
    computed: {
       dotWrapWidth() {
           return `${(1- 0.4 / this.imgData.length) *100}%`
       },
       dotWrapLeft() {
         return `${(1-(1- 0.4 / this.imgData.length)) *100/2 }%`
       }
    },
    methods: {
       autoPlay() {
           console.log(new Date)
        //    debugger
      
          this.currentIndex++;
       
         
           if(this.currentIndex >= this.imgData.length) {
               this.currentIndex = 0     
            }
       }
    },
    watch: {
        imgData(newData) {
            console.log('newData:', newData)
         this.timer = setInterval(()=> this.autoPlay(),2000)
        }
    },
    beforeDestroy () {
       clearInterval(this.timer)
    }
}
</script>

<style scoped>
  *{
      padding: 0;
      margin: 0;
      list-style: none;
  }
  .dot-wrap {
      position: absolute;
      margin: 0 auto;
      bottom: 10px;
      height: 10px;
      z-index: 10;
  }
  .dot-wrap li {
      display: inline;
      line-height: 10px;
  }
   .dot-wrap span {
       width: 10px;
       height: 10px;
       line-height: 10px;
       border-radius: 5px;
       display: inline-block;
       margin-left: 10px;
       margin-right: 10px;
   }
   .dot-default {
     background: white;
   }
   .dot-active {
     background: red;  
   }

.image-enter-active {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    /* transition: all 1s ease; */
  }
  .image-leave-active {
    transform: translateX(-100%);
    /* transition: all 1s ease; */
  } 
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  .wrap {
      width: 100%;
      height: 216px;
      position: relative;
      overflow: hidden;
  }
  .wrap-absolute {
      width: 100%;
      height: 216px;
    
  }
  img {
      display: block;
      width: 100%;
      height: 216px;
  }
</style>