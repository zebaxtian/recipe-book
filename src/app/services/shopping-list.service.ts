import { Ingredient } from '../shared/ingredient.model';
import { RecipeService } from './recipe.service';

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomatoe", 10)
    ];  

    constructor(private recipeService: RecipeService) {}

    onAddIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
        console.log(this.recipeService)
        this.ingredients.push(...ingredients);
    }
}