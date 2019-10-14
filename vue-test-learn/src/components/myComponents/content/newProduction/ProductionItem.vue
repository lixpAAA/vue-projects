<template>
  <div class="outer">
     <div class="img-container" v-for="item in data" :key="item">
        <a :href="item.link">
           <img :src="item.src" alt="" class="img-style">
        </a>
     </div>
  </div>
</template>

<script>
export default {
   name: 'product-item',
   props: {
     data: {
       type: Array,
       default: ()=> {
         return []
       }
     }
   },
   data() {
   }
}
</script>

<style scoped>
.outer {
  display: flex; 
}
.img-container {
  flex: 1
}
.img-style {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}
</style>