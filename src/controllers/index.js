import { addIngredientRoute, deleteIngredientRoute, getIngredientsRoute } from './ingredientController';
import { addMealRoute, deleteMealRoute, getMealsRoute } from './mealController';
import { getRecipesRoute } from './recipesController';
import { getShoppingListRoute } from "./shoppingListController";

export const routes = [
    addIngredientRoute, deleteIngredientRoute, getIngredientsRoute,
    addMealRoute, deleteMealRoute, getMealsRoute,
    getRecipesRoute,
    getShoppingListRoute
];