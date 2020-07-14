import { Injectable } from '@angular/core';
import{Recipe} from './recipes.model'
import { EventEmitter } from 'protractor';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  

recipes:Recipe[]=[
    {
      id:'r1',
      title:'Schnitzel',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/800px-Wiener-Schnitzel02.jpg',
      ingredients:['French Fries','Pork Meat','Salade']
 
    },
    {
     id:'r2',
     title:'Cookies',
     imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg/1024px-Chocolate_Chip_Cookies_-_kimberlykv.jpg',
     ingredients:['Brown Sugar','Egg','Choclates Chips']
 
   }
  ];
  getAllRecipes()
  {
    //creating a copie 
    return [...this.recipes];
  }
  getRecipe(id:string)
  {//copie zeda testaa {}
    return {...this.recipes.find(recipe=>{
      //if it match or not
      return recipe.id==id
    })
  }
}
deleteRecipe(id:string){
  this.recipes= this.recipes.filter(recipe=>{
    return recipe.id !== id;
  });


}
  constructor() { }
}
