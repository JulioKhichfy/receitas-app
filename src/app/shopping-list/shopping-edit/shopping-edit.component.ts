import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f',{static: false}) slForm:NgForm;

  editSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem:Ingredient;

  constructor(private shoppingService: ShoppingService) { }
  
  ngOnInit() {
    this.editSubscription = this.shoppingService.startedEditing.subscribe((index:number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingService.getIngredient(this.editedItemIndex);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  onAddItem(form: NgForm){
    
    const value = form.value;
    if(this.editMode){
      this.editedItem = value;
      this.shoppingService.editIngredient(this.editedItemIndex, this.editedItem)
    } else{
      const ingredient = new Ingredient(value.name, value.amount);
      this.shoppingService.addIngredient(ingredient);
    }
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppingService.deleteAll();
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
} 



