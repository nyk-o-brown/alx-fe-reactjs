import { useState, useEffect } from 'react';
import recipeData from '../data.json';

function HomePage() {
  // Initialize state for recipes and loading
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setRecipes(recipeData.recipes);
        setIsLoading(false);
      } catch (err) {
        console.error('Recipe loading error:', err); // Log the error for debugging
        setError(`Failed to load recipes: ${err.message}`); // Include error details in user message
        setIsLoading(false);
      }
    };

    loadRecipes();
  }, []); // Empty dependency array means this runs once on mount

  if (isLoading) {
    return <div className="text-center p-4">Loading recipes...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <div className="text-sm text-gray-500">
              <p>Cooking Time: {recipe.cookingTime}</p>
              <p>Difficulty: {recipe.difficulty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;