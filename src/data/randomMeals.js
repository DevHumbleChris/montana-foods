import axios from 'axios'

const randomMeals = []

const getRandomMeals = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
  const responseData = response.data
  randomMeals.push(responseData[0].meals[0])
}

getRandomMeals()
export default randomMeals
