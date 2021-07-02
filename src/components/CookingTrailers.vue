<template>
  <div class="CookingTrailers text-white relative">
    <div class="p-3 menu-title">
      Random Cooking YouTube
      <span class="text-red-600">Tutorials</span>.
    </div>
    <div class="flexContainer flex flex-row flex-nowrap overflow-x-scroll p-2">
      <div class="relative tutorialWrapper p-2 flex-shrink-0" v-for="(meal, index) in meals" :key="index">
        <div class="img-wrapper">
          <img :src="meal.strMealThumb" class="rounded">
        </div>
        <button @click="getVideoId(meal.youTubeKey)">
          <font-awesome-icon :icon="['fab', 'youtube']" class="absolute playButton text-red-500"/>
        </button>
        <div class="p-1 text-center text-sm">
          <div>
            {{ meal.strMeal }}
          </div>
          <div class="text-red-600">
            {{ meal.strCategory }}
          </div>
        </div>
      </div>
    </div>
    <YouTube class="absolute youTubeIframe" :YouTubeKeyId="YouTubeKeyId" :videoPlay="videoPlay"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import YouTube from '@/components/YouTube.vue'

export default {
  name: 'CookingTrailers',
  components: {
    YouTube
  },
  data () {
    return {
      videoPlay: false,
      YouTubeKeyId: ''
    }
  },
  computed: {
    ...mapState([
      'cookingTutorials'
    ]),
    meals () {
      const meal = this.cookingTutorials
      return meal
    }
  },
  methods: {
    getVideoId (videoID) {
      this.YouTubeKeyId = videoID
      this.videoPlay = true
      alert(`${this.YouTubeKeyId} ${this.videoPlay}`)
    }
  }
}
</script>

<style lang="scss">
.CookingTrailers {
  height: 390px;
  background: #202030;
}
.tutorialWrapper {
  width: 18rem;
  height: 23rem;
}
.playButton {
  top: 80px;
  left: 80px;
  font-size: 90px;
}
.img-wrapper img {
  width: 16rem;
  height: 15rem;
  object-fit: cover;
  filter: grayscale(50%);
}
.youTubeIframe {
  top: -20px;
  right: 50px;
}
</style>
