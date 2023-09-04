import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from "./list/list.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
      AddComponent,
      ViewComponent,
      ListComponent,
    ],
    imports: [
      CommonModule,
      RecipesRoutingModule,
      ReactiveFormsModule
    ],
    exports: [
      AddComponent,
      ViewComponent,
      ListComponent
    ]
})

export class RecipesModule {

}