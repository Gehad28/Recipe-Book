import { NgModule } from "@angular/core";
import { ShoppinglistAddComponent } from './shoppinglist-add/shoppinglist-add.component';
import { ShoppinglistListComponent } from './shoppinglist-list/shoppinglist-list.component';
import { ShoppinglistViewComponent } from './shoppinglist-view/shoppinglist-view.component';
import { CommonModule } from "@angular/common";
import { ShoppingListRoutingModule } from "./shoppinglist-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ShoppinglistAddComponent,
        ShoppinglistListComponent,
        ShoppinglistViewComponent
    ],
    imports: [
        CommonModule,
        ShoppingListRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        ShoppinglistAddComponent,
        ShoppinglistListComponent,
        ShoppinglistViewComponent
    ]
})

export class ShoppingListModule {}