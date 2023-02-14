import { Injectable } from '@angular/core';
import { delay, Observable, of, shareReplay } from 'rxjs';
import { Recipe } from './recipe.model';

//@Injectable()
export class RecipeService{
  
  recipes$: Observable<Recipe[]> = of([
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]);  
  
  constructor() {
    
  }

  getRecipes():Observable<Recipe[]>{
    return this.recipes$.pipe(
      shareReplay()
    );
  }

}
