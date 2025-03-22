import { useState, useEffect } from 'react'
import recipeData from './data.json'
import './index.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      // Debug log to see the structure of imported data
      console.log('Imported recipe data:', recipeData)
      
      // Direct array access since we know the structure
      if (recipeData[0] && recipeData[0].recipes) {
        setRecipes(recipeData[0].recipes)
        console.log('Setting recipes:', recipeData[0].recipes)
      } else {
        console.error('Invalid recipe data structure:', recipeData)
      }
    } catch (error) {
      console.error('Error loading recipes:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Render recipe cards
  const renderRecipeCards = () => {
    return recipes.map(recipe => (
      <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">{recipe.summary}</p>
      </div>
    ))
  }

  if (isLoading) {
    return <div className="text-center p-8">Loading recipes...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.length > 0 ? renderRecipeCards() : (
            <div className="col-span-full text-center p-8 bg-white rounded-lg shadow">
              No recipes found. Please check your data source.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App