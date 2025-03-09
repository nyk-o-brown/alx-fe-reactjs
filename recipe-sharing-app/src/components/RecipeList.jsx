import React from 'react';
import useRecipeStore from '../stores';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleDelete = (id) => {
    deleteRecipe(id);
  };

  const handleUpdate = (id) => {
    const newTitle = prompt('Enter new title:');
    const newDescription = prompt('Enter new description:');
    if (newTitle && newDescription) {
      updateRecipe({ id, title: newTitle, description: newDescription });
    }
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleUpdate(recipe.id)}>Update</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;