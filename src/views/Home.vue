<template>
  <div class="home relative">
    <HelloWorld/>
    <Meals/>
    <Categories/>
    <CookingTrailers/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Meals from '@/components/Meals.vue'
import Categories from '@/components/Categories.vue'
import CookingTrailers from '@/components/CookingTrailers.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Meals,
    Categories,
    CookingTrailers
  }
}
</script>
