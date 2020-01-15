import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            "A test recipe",
            "This is a simple test",
            "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            "A other recipe",
            "This is other test",
            "https://p1.pxfuel.com/preview/516/338/373/tube-noodled-noodle-tube-food-noodles.jpg",
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 2),
                new Ingredient('Cheese', 2)
            ]
        )
    ];
    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes;
    }

    onSelectedRecipe(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}