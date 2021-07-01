<template>
  <div class="Meals">
    <div class="p-3 menu-title">
      Todays Top Random
      <span class="text-red-600">Meals</span>.
    </div>
    <div class="flexContainer flex flex-nowrap flex-row overflow-x-scroll" >
      <img v-for="(meal, index) in meals" :key="index" class="meal-img rounded-full m-2 border-4" :src="meal.strMealThumb"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Meals',
  data () {
    return {
      meals: []
    }
  },
  computed: {
    ...mapState([
      'randomMeals'
    ])
  },
  methods: {
  },
  mounted () {
    this.meals = this.randomMeals
  }
}
</script>

<style lang="scss">
.Meals {
  height: 312px;
  background: yellow;

  .meal-img {
    width: 12rem;
    height: 12rem;
  }
}
</style>
