import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DetailRecipeComponent } from './components/detail-recipe/detail-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { UpdateRecipeComponent } from './components/update-recipe/update-recipe.component';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'addRecipe', component: AddRecipeComponent },
    { path: 'recipes', component: RecipeComponent },
    { path: 'recipes/:id', component: DetailRecipeComponent },
    { path: 'updateRecipe/:id', component: UpdateRecipeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path:'favorite-recipes',component: FavoriteRecipesComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent},
    { path: 'search', component: SearchComponent},
    // { path: '**', component: PageNotFoundComponent },
  ];
