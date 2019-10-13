<template>
  <div :class="['navbar-container', classStyle]">
  <div class="left-slot"><slot name="left"></slot></div>
  <div class="center-slot"><slot name="center"></slot></div>
  <div class="right-slot"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'navbar',
    props: {
        classStyle: {
            default: '',
            type: String
        }
    }

}
</script>

<style scoped>
 .navbar-container {
    display: flex;
    height: 44px;
    width: 100%;
    align-items: center;
 }
 .left-slot {
    width: 60px;
 }
 .center-slot {
    flex: 1;
    text-align: center;
    color: white;
 }
 .right-slot {
     width: 60px;
 }
</style>