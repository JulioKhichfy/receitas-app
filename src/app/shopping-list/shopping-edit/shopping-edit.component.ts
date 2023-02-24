import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
 
  
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.shoppingService.addIngredient(ingredient);
  }

  onClear(form: NgForm){
    form.reset();
  }

  onDelete(){
    this.shoppingService.deleteAll();
  }
} 

function ViewChild(arg0: string, arg1: { static: boolean; }) {
  throw new Error('Function not implemented.');
}

