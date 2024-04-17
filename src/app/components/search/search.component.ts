import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from '../recipe/recipe.component';

interface Recipe {
  _id: string;
  name: string;
  url: string;
  ingredients: string[];
  description: string;
  method: string;
  cuisine: string;
  Diet: string;
  serving: string;
  calories: string;
  imgURL: string;
  Reviews: { username: string; comment: string }[];
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RecipeComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  query: string = '';
  cuisine: string = '';
  cuisineOptions: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>('https://recipe-backend-r.onrender.com/recipes').subscribe(
      (response) => {
        this.recipes = response;
        this.filteredRecipes = response;
        this.cuisineOptions = [...new Set(response.map(recipe => recipe.cuisine))];
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  handleSearch(): void {
    const lowerCaseQuery = this.query.toLowerCase();

    const filtered = this.recipes.filter(
      (recipe) =>
        (recipe.name.toLowerCase().includes(lowerCaseQuery) ||
          recipe.cuisine.toLowerCase().includes(lowerCaseQuery)) &&
        (!this.cuisine || recipe.cuisine.toLowerCase() === this.cuisine.toLowerCase())
    );
    this.filteredRecipes = filtered;
  }

  handleCuisineSelect(): void {
    this.handleSearch();
  } 
}
