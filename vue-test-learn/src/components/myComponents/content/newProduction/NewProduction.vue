<template>
  <div class="outer">
     <slot></slot>
  </div>
</template>

<script>
export default {
   name: 'new-production'
}
</script>

<style scoped>
.outer {
  width: 100%;
  /* padding: 0 10px; */
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>