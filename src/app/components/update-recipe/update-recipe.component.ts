//src/app/components/update-recipe/update-recipe.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent implements OnInit {

  recipe: Recipe | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];
      this.fetchRecipe(recipeId);
    });
  }

  fetchRecipe(id: string): void {
    this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`).subscribe(
      (data: Recipe) => {
        this.recipe = data;
      },
      (error) => {
        console.error('Error fetching recipe:', error);
      }
    );
  }

  submitForm(): void {
    if (!this.recipe) {
      return;
    }
    this.http.put(`http://localhost:3000/recipes/${this.recipe._id}`, this.recipe)
      .subscribe(
        (response: any) => {
          if (response) {
            console.log('Recipe updated successfully:', response);
            // Optionally, navigate to a different route or show a success message
          } else {
            console.error('Error updating recipe:', response);
            // Handle error
          }
        },
        (error) => {
          console.error('Error updating recipe:', error);
          // Handle error
        }
      );
  }
  

}
