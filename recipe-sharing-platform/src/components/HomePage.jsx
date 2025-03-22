import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        // Debug log to check data structure
        console.log('Recipe data:', recipeData);
        
        // Check if data exists and has the correct structure
        if (recipeData && recipeData[0]?.recipes) {
          setRecipes(recipeData[0].recipes);
        } else {
          throw new Error('Invalid recipe data structure');
        }
      } catch (err) {
        console.error('Recipe loading error:', err);
        setError(`Failed to load recipes: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (isLoading) {
    return <div className="text-center p-8">Loading recipes...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  // Add null check before mapping
  if (!recipes || recipes.length === 0) {
    return <div className="text-center p-8">No recipes found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <Link 
            to={`/recipe/${recipe.id}`} 
            key={recipe.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;