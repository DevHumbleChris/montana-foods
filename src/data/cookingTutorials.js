import axios from 'axios'

const cookingTutorials = []

const getCookingTutorials = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  const responseData = response.data

  const { idMeal, strMeal, strCategory, strArea, strMealThumb, strYoutube } = responseData.meals[0]

  const youTubeKey = strYoutube.split('=')

  const meal = {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strMealThumb,
    strYoutube,
    youTubeKey: youTubeKey[1]
  }

  cookingTutorials.push(meal)
}

for (let x = 0; x <= 10; x++) {
  getCookingTutorials()
}

export default cookingTutorials
