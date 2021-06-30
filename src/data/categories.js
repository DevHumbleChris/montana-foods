import axios from 'axios'

const categories = []

const getMealCategories = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  const responseData = response.data
  categories.push(responseData.categories)
}

getMealCategories()

export default categories
