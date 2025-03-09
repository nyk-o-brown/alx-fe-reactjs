import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ padding: '10px', backgroundColor: '#d9534f', color: '#fff', border: 'none', borderRadius: '5px' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;