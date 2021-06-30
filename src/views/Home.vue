<template>
  <div class="home">
    <HelloWorld/>
    <Meals/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Meals from '@/components/Meals.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Meals
  }
}
</script>
