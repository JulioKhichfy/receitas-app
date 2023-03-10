import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, delay, filter, map, Observable, of, shareReplay, Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({providedIn:'root'})
export class RecipeService{

  //recipeSelected = new EventEmitter<Recipe>();
  recipes=[
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
  ]
  //recipes$: Observable<Recipe[]> = of(this.recipes);  

  private recipesChanged = new BehaviorSubject<Recipe[]>(this.recipes);

  recipes$: Observable<Recipe[]>  = this.recipesChanged.asObservable();
  
  constructor(private slService: ShoppingService) {

  }

  getRecipes():Observable<Recipe[]>{
    return this.recipes$.pipe(
      shareReplay()
    );
  }

  getRecipe(index:number):Recipe{
    const recipe = this.recipes[index]
    return recipe;
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    console.log("recipe service")
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }
}
