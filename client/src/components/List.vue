<template>
  <h1>this is the list</h1>
</template>

<script>
export default {
  name: 'List'

}
mounted (){
  this.$store.dispatch('getLists')
}
</script>

<style scoped>
</style>
