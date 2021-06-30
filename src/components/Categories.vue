<template>
  <div class="Meals">
    <div class="p-3 menu-title">
      Browse Recipes According To
      <span class="text-red-600">Categoriess</span>.
    </div>
    <div class="flexContainer flex flex-nowrap flex-row overflow-x-scroll" >
      <img v-for="(meal, index) in meals" :key="index" class="meal-img rounded-full m-2 border-4" :src="meal.strMealThumb"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      categories: []
    }
  },
  methods: {},
  mounted: {}
}
</script>

<style lang="scss">
</style>
