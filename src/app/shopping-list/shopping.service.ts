import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn:'root'})
export class ShoppingService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  startedEditing = new Subject<number>();

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

  deleteAll(){
    this.ingredients = [];
    this.loadIngredients.next(this.ingredients);
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  editIngredient(index: number, ingredient:Ingredient){
    this.ingredients[index].name = ingredient.name;
    this.ingredients[index].amount = ingredient.amount;
    this.loadIngredients.next(this.ingredients);
  }

}
