import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search recipes"
        style={{ width: '100%', padding: '8px', margin: '10px 0' }}
      />
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} style={{ marginRight: '10px' }}>View Details</Link>
            <button onClick={() => handleUpdate(recipe.id)}>Update</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;