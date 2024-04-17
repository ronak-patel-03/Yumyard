//src/app/components/add-recipe/add-recipe.component.ts
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  recipe: Recipe = {
    
    name: "",
    url: "",
    ingredients: [],
    description: "",
    method: "",
    cuisine: "",
    Diet: "",
    serving: "",
    calories: "",
    imgURL: "",
  };

  constructor(private http: HttpClient) { }

  handleSubmit() {
    console.log('Submitting recipe:', this.recipe); 

    this.http.post('https://recipe-backend-r.onrender.com/addRecipe', this.recipe)
      .subscribe(
        () => {
          console.log('Recipe added successfully');
          this.resetForm();
        },
        error => {
          console.error('Error adding recipe:', error);
        }
      );
  }

  private resetForm() {
    console.log('Resetting form');
    this.recipe = {
      name: "",
      url: "",
      ingredients: [],
      description: "",
      method: "",
      cuisine: "",
      Diet: "",
      serving: "",
      calories: "",
      imgURL: ""
    };
  }
}

