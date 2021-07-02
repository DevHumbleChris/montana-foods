<template>
  <div class="YouTube">
    <youtube :video-id="videoId" :player-vars="playerVars" ref="youtube" @playing="playing"></youtube>
  </div>
</template>

<script>
export default {
  name: 'YouTube',
  data () {
    return {
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 0
      }
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.playing
    }
  },
  methods: {
    playing () {
      console.log('You we are watching!!!')
    }
  }
}
</script>

<style lang="scss">
</style>
