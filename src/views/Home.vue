<template>
  <div class="home">
    <HelloWorld/>
    <Meals/>
    <Categories/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Meals from '@/components/Meals.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Meals,
    Categories
  }
}
</script>
