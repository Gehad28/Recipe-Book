import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cmponents/header/header.component';
import { RecipesModule } from './cmponents/recipes/recipes.module';
import { ShoppingListModule } from './cmponents/shoppinglist/shoppinglist.module';
import { DirectiveCustomDirective } from './cmponents/directive-custom.directive';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, DirectiveCustomDirective
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RecipesModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
