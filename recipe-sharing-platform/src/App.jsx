import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm'
import recipeData from './data.json'
import './index.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      console.log('Imported recipe data:', recipeData)
      
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

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link 
                to="/" 
                className="text-2xl font-bold text-blue-600 hover:text-blue-800"
              >
                Recipe App
              </Link>
              <div className="flex space-x-4">
                <Link 
                  to="/" 
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Home
                </Link>
                <Link 
                  to="/recipes" 
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  All Recipes
                </Link>
                <Link 
                  to="/add-recipe" 
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Add Recipe
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  recipes={recipes} 
                  isLoading={isLoading} 
                />
              } 
            />
            <Route 
              path="/recipe/:id" 
              element={
                <RecipeDetail 
                  recipes={recipes}
                />
              } 
            />
            <Route 
              path="/add-recipe" 
              element={
                <AddRecipeForm />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App