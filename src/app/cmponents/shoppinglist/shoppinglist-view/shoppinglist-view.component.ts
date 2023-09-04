import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingList, shoppingList } from 'src/app/shoppinglist';

@Component({
  selector: 'app-shoppinglist-view',
  templateUrl: './shoppinglist-view.component.html',
  styleUrls: ['./shoppinglist-view.component.css']
})

export class ShoppinglistViewComponent {
  constructor(private route: ActivatedRoute) {}
  list: ShoppingList | undefined;

  getView() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.list = shoppingList[id];
  }

  ngOnInit() {
    this.getView();
  }
}
