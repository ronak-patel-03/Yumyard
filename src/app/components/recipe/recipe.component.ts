//src/app/components/recipe/recipe.component.ts
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { faTrash,faStar,faHeart,faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

export interface Recipe {
  _id: string;
  name: string;
 imgURL:string;
 cuisine:string;
}


@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,HttpClientModule,RouterLink,],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  @Input() recipes: Recipe[] = [];
  faTrash = faTrash;
  faStar = faStar;
  faHeart=faHeart;
  faPen=faPen;

  deletedRecipes: string[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>('https://recipe-backend-r.onrender.com/recipes')
      .subscribe({
        next: (data) => {
          this.recipes = data;
        },
        error: (error) => {
          console.error('Error fetching recipes:', error);
        }
      });
  }

  handleDelete(recipeId: string): void {
    this.http.delete(`https://recipe-backend-r.onrender.com/recipes/${recipeId}`)
      .subscribe({
        next: () => {
          if(recipeId){
          this.deletedRecipes.push(recipeId);
          }
          this.fetchRecipes();
        },
        error: (error) => {
          console.error('Error deleting recipe:', error);
        }
      });
  }

  handleEdit(recipeId: string): void {
    console.log('Edit icon clicked for recipe with ID:', recipeId);
    this.router.navigateByUrl(`/updateRecipe/${recipeId}`);
  }

}
