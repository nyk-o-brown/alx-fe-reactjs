import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../stores';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <DeleteRecipeButton recipeId={recipe.id} />
      <Link to={`/recipe/${recipe.id}/edit`} style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Edit Recipe</Link>
    </div>
  );
};

export default RecipeDetails;