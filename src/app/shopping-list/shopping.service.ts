import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  private loadIngredients = new BehaviorSubject<Ingredient[]>(null);

  ingredients$:Observable<Ingredient[]> = this.loadIngredients.asObservable();
  
  constructor() {
    this.loadIngredients.next(this.ingredients);
   }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.loadIngredients.next(this.ingredients);
  }
}
