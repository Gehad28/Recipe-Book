import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes, recipes } from "src/app/recipes";

@Component({
  selector: 'recipes-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() id!: number;
  
  constructor(private route: ActivatedRoute) {}
  recipe: Recipes | undefined;

  ngOnChanges(){
    this.recipe = recipes[this.id];
  }

  onClick(){
    
  }
}
