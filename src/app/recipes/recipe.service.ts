import { Injectable, EventEmitter } from '@angular/core';
import { delay, Observable, of, shareReplay } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({providedIn:'root'})
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();
  
  recipes$: Observable<Recipe[]> = of([
    new Recipe(
      'A Test Recipe 1', 
      'This is simply a test 1', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    
      new Recipe(
        'A Test Recipe 2', 
        'This is simply a test 2', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1),
        ])
  ]);  
  
  constructor(private slService: ShoppingService) {
    
  }

  getRecipes():Observable<Recipe[]>{
    return this.recipes$.pipe(
      shareReplay()
    );
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    console.log("recipe service")
    this.slService.addIngredients(ingredients);
  }
}
