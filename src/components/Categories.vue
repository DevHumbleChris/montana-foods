<template>
  <div class="Meals Categories">
    <div class="p-3 menu-title">
      Browse Recipes According To
      <span class="text-red-600">Categories</span>.
    </div>
    <div class="flexContainer flex flex-row flex-nowrap overflow-x-scroll" v-if="mealCategories">
      <div class="relative categoryDiv my-6 mx-2 rounded-md flex-shrink-0" v-for="meal in mealCategories" :key="meal.idCategory">
        <div class="cover rounded-t-md">
        </div>
        <img class="imgCategory absolute rounded-full border-2 object-cover" :src="meal.strCategoryThumb"/>
        <div class="p-12 text-center">
          {{ meal.strCategory }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Categories',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'categories'
    ]),
    mealCategories () {
      const mealCategories = this.categories[0]
      return mealCategories
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.categoryDiv {
  width: 10rem;
  height: 12rem;
  background: #f1f5f8;
}
.cover {
  height: 6rem;
  background: #F8F0C6;
}
.imgCategory {
  width: 120px;
  height: 120px;
  top: 25px;
  left: 20px;
}
</style>
