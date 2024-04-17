// src/app/components/detail-recipe/detail-recipe.component.ts
import { Component ,Input, OnInit} from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-detail-recipe',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.css'
})
export class DetailRecipeComponent implements OnInit{
 
  recipe: Recipe | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.fetchRecipe(recipeId);
    });
  }

  fetchRecipe(id: string): void {
    this.http.get<Recipe>(`https://recipe-backend-r.onrender.com/recipes/${id}`).subscribe(
      (data: Recipe) => {
        this.recipe = data;
        console.log('Fetched Recipe:', this.recipe);
      },
      (error) => {
        console.error('Error fetching recipe:', error);
      }
    );
  }
}