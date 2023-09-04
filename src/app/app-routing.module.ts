import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./cmponents/recipes/add/add.component";

const routes:Routes = [
    {
        path: 'recipesView',
        loadChildren: () => import('./cmponents/recipes/recipes.module').then(m => m.RecipesModule)
    },
    {
        path: 'recipesAdd',
        loadChildren: () => import('./cmponents/recipes/recipes.module').then(m => m.RecipesModule)
    },
    {
        path: 'recipesEdit',
        loadChildren: () => import('./cmponents/recipes/recipes.module').then(m => m.RecipesModule)
    },
    {
        path: 'recipesList',
        loadChildren: () => import('./cmponents/recipes/recipes.module').then(m => m.RecipesModule)
    },
    {
        path: 'shoppinglistView',
        loadChildren: () => import('./cmponents/shoppinglist/shoppinglist.module').then(m => m.ShoppingListModule)
    },
    {
        path: 'shoppinglistAdd',
        loadChildren: () => import('./cmponents/shoppinglist/shoppinglist.module').then(m => m.ShoppingListModule)
    },
    {
        path: 'shoppinglistEdit',
        loadChildren: () => import('./cmponents/shoppinglist/shoppinglist.module').then(m => m.ShoppingListModule)
    },
    {
        path: 'shoppinglistList',
        loadChildren: () => import('./cmponents/shoppinglist/shoppinglist.module').then(m => m.ShoppingListModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}