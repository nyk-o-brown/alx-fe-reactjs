import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe]
  })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  }))
}));