<template>
  <div class="wrapper"></div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      name: 1
    }
  },
  components: {},
  created() {
    console.log('time:', Date.now())
  },
  mounted() {
    console.log('time2:', Date.now())
    this.name = this.name + 1
    console.log('name:', this.name++)
  },
  methods: {}
}
</script>
<style scoped>
.wrapper {
}
</style>