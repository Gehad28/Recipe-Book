import { Component } from '@angular/core';
import { shoppingList } from 'src/app/shoppinglist';

@Component({
  selector: 'app-shoppinglist-list',
  templateUrl: './shoppinglist-list.component.html',
  styleUrls: ['./shoppinglist-list.component.css']
})
export class ShoppinglistListComponent {
  shoppinglist = shoppingList

  getRecipe(id: number) {
    return this.shoppinglist[id];
  }
  
}
