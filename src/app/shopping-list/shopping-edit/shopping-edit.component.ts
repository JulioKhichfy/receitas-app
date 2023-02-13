import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{

  //@ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  //@ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(name, amount){
    //const ingredient = new Ingredient(this.nameInputRef.nativeElement.value, +this.amountInputRef.nativeElement.value)
    //console.log("name = " + this.nameInputRef.nativeElement.value + " amount = " +this.amountInputRef.nativeElement.value)
    console.log("name = " + name.value + " amount = " +amount.value)
    const ingredient = new Ingredient(name.value, amount.value)
    this.ingredientAdded.emit(ingredient);
  }
}
