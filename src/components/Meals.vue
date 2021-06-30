<template>
  <div class="Meals">
    <div class="p-3 menu-title">
      Todays Top Random
      <span class="text-red-600">Meals</span>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meals',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {}
}
</script>

<style lang="scss">
.Meals {
  height: 350px;
  background: yellow;

  .menu-title {
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
  }
}
</style>
