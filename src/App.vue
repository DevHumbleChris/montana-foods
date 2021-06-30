<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display&family=Chango&family=Fascinate+Inline&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Modak&family=Ubuntu&family=Ubuntu+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
#app {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
