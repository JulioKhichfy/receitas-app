import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn:'root'})
export class ShoppingService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  private loadIngredients = new BehaviorSubject<Ingredient[]>(this.ingredients);

  ingredients$:Observable<Ingredient[]> = this.loadIngredients.asObservable();
  
  constructor() {
    this.loadIngredients.next(this.ingredients);
   }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.loadIngredients.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]){
    console.log("shopping service 1 " + this.ingredients.length)
    this.ingredients.push(...ingredients);
    console.log("shopping service 2 " + this.ingredients.length)
    //this.loadIngredients.next(this.ingredients);
  }
}
