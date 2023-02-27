import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit{

  ingredients$:Observable<Ingredient[]>;
  
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.ingredients$ = this.shoppingService.ingredients$;
  }

  onEditItem(index:number){
    console.log("id = " + index)
    this.shoppingService.startedEditing.next(index);
  }
}