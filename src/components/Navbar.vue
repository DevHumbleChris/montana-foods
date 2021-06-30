<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white title" to="/">
          Montana Foods
        </router-link>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <font-awesome-icon :icon="['fab', 'facebook-square']" class="icons"/><span class="ml-2">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <font-awesome-icon :icon="['fab', 'twitter-square']" class="icons"/><span class="ml-2">Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="icons"/><span class="ml-2">Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss">
.navbar {
  background: #2E294E;

  .title {
    font-size: 28px;
    color: #FFD400;
    font-family: 'Fascinate Inline', cursive;
  }
  .icons {
    font-size: 23px;
  }
}
</style>
