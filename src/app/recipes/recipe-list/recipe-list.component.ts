import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  
  recipes$:Observable<Recipe[]>
  subscription: Subscription;
  
  constructor(private recipeService: RecipeService,
    private router:Router,
    private route:ActivatedRoute)
  { }

  ngOnInit() {
  
    this.recipes$ = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})

  }

}
