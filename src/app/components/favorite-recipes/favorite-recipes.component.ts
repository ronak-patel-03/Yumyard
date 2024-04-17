import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent implements OnInit {
  favoriteRecipes = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getFavoriteRecipes();
  }

  getFavoriteRecipes(): void {
    const userId = this.userService.getUserId();
    if (!userId) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.http.get<any>(`https://recipe-backend-r.onrender.com/users/${userId}/favorite-recipes`)
      .subscribe(
        response => {
          this.favoriteRecipes = response.favoriteRecipes;
        },
        error => {
          console.error('Error fetching favorite recipes:', error);
        }
      );
  }

  removeFromFavorites(recipeId: string): void {
    const userId = this.userService.getUserId();
    if (!userId) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.http.delete<any>(`https://recipe-backend-r.onrender.com/users/${userId}/favorite-recipes/${recipeId}`)
      .subscribe(
        response => {
          this.getFavoriteRecipes();
        },
        error => {
          console.error('Error removing recipe from favorites:', error);
        }
      );
  }

}