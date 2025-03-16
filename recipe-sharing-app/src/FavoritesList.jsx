import React, { useState } from 'react';
import useRecipeStore from './stores';

const FavoritesList = () => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));

  const [recipeId, setRecipeId] = useState('');

  const handleAddFavorite = () => {
    addFavorite(recipeId);
    setRecipeId('');
  };

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(id => (
          <li key={id}>
            {id}
            <button onClick={() => handleRemoveFavorite(id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={recipeId}
          onChange={(e) => setRecipeId(e.target.value)}
          placeholder="Enter recipe ID"
        />
        <button onClick={handleAddFavorite}>Add Favorite</button>
      </div>
    </div>
  );
};

export default FavoritesList;