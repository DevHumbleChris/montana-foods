<template>
  <div class="home relative">
    <HelloWorld/>
    <Meals/>
    <Categories/>
    <CookingTrailers/>
    <YouTube/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Meals from '@/components/Meals.vue'
import Categories from '@/components/Categories.vue'
import CookingTrailers from '@/components/CookingTrailers.vue'
import YouTube from '@/components/YouTube.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Meals,
    Categories,
    CookingTrailers,
    YouTube
  }
}
</script>
