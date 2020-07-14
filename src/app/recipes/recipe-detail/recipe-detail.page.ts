import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import{Recipe} from '../recipes.model'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
//Storing it 

recipeLoaded:Recipe;
  constructor(private routeActivated:ActivatedRoute,private _recipeService:RecipesService,
    private router:Router,private alertCrl:AlertController ){ }

  ngOnInit() {
    this.routeActivated.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('id')){
        //redirect
        return;
           
      }
      //extacting the id
      const recipeId=paramMap.get('id');
      //loading it 
      this.recipeLoaded=this._recipeService.getRecipe(recipeId);

    })

  }
 deleteRecipe()
 {
   this.alertCrl.create({
     header:'Are you sure?',
     message:'Do you really want to delete this recipe',
     buttons:[
      {
        text:'Cancel',
        role:'cancel'

     },
     {
      text:'Delete',
      handler:()=>{
        this._recipeService.deleteRecipe(this.recipeLoaded.id);
   
        this.router.navigate(['/recipes']);
      }
    }

    
  ]
  })
   .then(alert=>{
     alert.present();

   });
}
   

}
