import axios from 'axios'

const randomMeals = []

const getRandomMeals = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  const responseData = response.data
  randomMeals.push(responseData.meals[0])
}

for (let x = 0; x <= 10; x++) {
  getRandomMeals()
}

export default randomMeals
