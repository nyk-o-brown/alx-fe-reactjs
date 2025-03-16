import React from 'react';

const RecommendationsList = () => {
  const recommendations = [
    { id: 1, title: 'Spaghetti Carbonara' },
    { id: 2, title: 'Chicken Alfredo' },
    { id: 3, title: 'Beef Stroganoff' },
    { id: 4, title: 'Vegetable Stir Fry' },
    { id: 5, title: 'Fish Tacos' }
  ];

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <ul>
        {recommendations.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;