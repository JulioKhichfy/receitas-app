import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe$:Observable<Recipe>;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.selectedRecipe$ = this.recipeService.recipeSelected;
  }
}
