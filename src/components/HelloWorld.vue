<template>
  <div class="hello p-5 text-white" :style="randomImageGeneratorStyle()">
   <div class="welcome-title">Welcome To Montana Foods.</div>
   <div class="p-3 subtitle">
     Experience more than just searching through recipes. We bring you new experience to world of foods.
   </div>
   <div class="relative flex w-full flex-wrap items-stretch mb-3">
  <input type="text" placeholder="Search Recipes..." class="search px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
  <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
    <font-awesome-icon :icon="['fas', 'binoculars']" class="text-blue-200"></font-awesome-icon>
  </span>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      images: [
        {
          src: 'https://latimesblogs.latimes.com/.a/6a00d8341c630a53ef014e5f6d5bdb970c-800wi'
        },
        {
          src: 'https://chiefexecutive.net/wp-content/uploads/2016/09/pizza.jpg'
        },
        {
          src: 'https://www.crazyforcrust.com/wp-content/uploads/2017/11/Chocolate-Peanut-Butter-Popcorn-3-of-9-640x959.jpg'
        },
        {
          src: 'https://i.pinimg.com/originals/b1/62/40/b162400b88c13b9d4aa1d5cee911d5b6.jpg'
        },
        {
          src: 'https://i.ndtvimg.com/i/2015-07/sweet-625_625x350_51438261157.jpg'
        },
        {
          src: 'https://1.bp.blogspot.com/-n-wk1UGXZQU/X2gJE8Gg-sI/AAAAAAAAFvM/yRc86j4F5CgjyrpQjgKQrma4jkSBKr5NQCLcBGAsYHQ/s2048/9B24E34B-AABC-4D88-A6B7-D4D6377523AD.jpeg'
        },
        {
          src: 'https://foodjunctionofficial.com/wp-content/uploads/2020/11/IMG_7297-800x840.jpg'
        },
        {
          src: 'https://basicrecipe.co.uk/wp-content/uploads/2019/03/egg-on-a-ceramic-cup-2402495.jpg'
        },
        {
          src: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/09/bhindi-do-pyaza-500x500.jpg'
        },
        {
          src: 'https://cdn.shopify.com/s/files/1/0244/9506/3103/articles/terriyakichickenlight_768x432_crop_center.jpg?v=1611693867'
        }
      ]
    }
  },
  methods: {
    randomImageGeneratorStyle () {
      const randomImageLink = Math.floor(Math.random() * this.images.length)
      const style = `background-image: url('${this.images[randomImageLink].src}');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `
      return style
    }
  }
}
</script>

<style scoped lang="scss">
.hello {
  height: 350px;

  .welcome-title {
    font-family: 'Chango', cursive;
    font-size: 26px;

    @media screen and (max-width: 480px) {
      font-size: 22px;
    }
  }
  .subtitle{
    font-family: 'Modak', cursive;
    font-size: 28px;
    color: blue;

    @media screen and (max-width: 480px) {
      font-size: 25px;
    }
  }
  .search {
    font-family: 'Ubuntu Condensed', sans-serif;
    color: #000000;
  }
}
</style>
