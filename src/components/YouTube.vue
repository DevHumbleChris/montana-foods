<template>
  <div v-if="videoPlay" :class="videoPlay ? 'YouTube p-8 rounded': 'displayNone'">
    <youtube :video-id="videoId" :player-vars="playerVars" ref="youtube" @playing="playing"></youtube>
    <button class="absolute top-2 right-4" @click="closeVideoPlayer">
      X
    </button>
  </div>
</template>

<script>
export default {
  name: 'YouTube',
  props: {
    YouTubeKeyId: String,
    videoPlay: Boolean
  },
  data () {
    return {
      playerVars: {
        autoplay: 1
      }
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.playing
    },
    videoId () {
      return this.YouTubeKeyId
    }
  },
  methods: {
    playing () {
      console.log('You we are watching!!!')
    },
    closeVideoPlayer () {
      this.videoPlay = false
    }
  }
}
</script>

<style lang="scss">
.YouTube {
  background: green;
}
.YouTube iframe {
  width: 100%;
}
.displayNone {
  display: none;
}
</style>
