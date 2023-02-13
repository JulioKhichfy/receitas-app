import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  
  constructor() { }

  ngOnInit() {
  }

  addIngredient(ing:Ingredient){
    //console.log("vou adicionar: " + element.value["name"] + " e " + element.value["amount"])
    console.log("vou adicionar: " + ing.name + " e " + ing.amount)
    this.ingredients.push(ing);
  }
}