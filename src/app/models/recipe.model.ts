// project\models\recipes.js
export interface Recipe {
    _id?: string;
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
    Reviews?: { username: string; comment: string }[];
  }
  