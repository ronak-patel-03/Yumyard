import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteRecipes: string[] = []; // Array to store the IDs of favorite recipes

  constructor() {}

  toggleFavorite(recipeId: string): void {
    const index = this.favoriteRecipes.indexOf(recipeId);
    if (index === -1) {
      this.favoriteRecipes.push(recipeId); // Add to favorites if not already favorited
    } else {
      this.favoriteRecipes.splice(index, 1); // Remove from favorites if already favorited
    }
  }

  isFavorite(recipeId: string): boolean {
    return this.favoriteRecipes.includes(recipeId); // Check if the recipe is in favorites
  }

  getFavoriteRecipes(): string[] {
    return this.favoriteRecipes; // Return all favorite recipe IDs
  }
}