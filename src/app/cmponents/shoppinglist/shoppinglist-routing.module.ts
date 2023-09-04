import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppinglistAddComponent } from "./shoppinglist-add/shoppinglist-add.component";
import { ShoppinglistListComponent } from "./shoppinglist-list/shoppinglist-list.component";
import { ShoppinglistViewComponent } from "./shoppinglist-view/shoppinglist-view.component";

const routes: Routes = [
    {
        path: 'shoppinglist-list',
        component: ShoppinglistListComponent
    },
    {
        path: 'shoppinglist-add',
        component: ShoppinglistAddComponent
    },
    {
        path: 'shoppinglist-view/:id',
        component: ShoppinglistViewComponent
    },
    {
        path: 'shoppinglist-edit/:id',
        component: ShoppinglistAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShoppingListRoutingModule{}