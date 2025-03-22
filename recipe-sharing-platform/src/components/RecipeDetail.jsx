import { useParams } from 'react-router-dom'

function RecipeDetail({ recipes }) {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === parseInt(id))

  if (!recipe) {
    return <div className="text-center p-8">Recipe not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.summary}</p>
        <div className="text-sm text-gray-500">
          <p>Cooking Time: {recipe.cookingTime}</p>
          <p>Difficulty: {recipe.difficulty}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail