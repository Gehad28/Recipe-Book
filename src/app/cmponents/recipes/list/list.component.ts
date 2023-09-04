import { Component, EventEmitter, Input, Output } from "@angular/core";
import { recipes } from "src/app/recipes";


@Component({
    selector: "recipes-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
})

export class ListComponent {
    @Output() id = new EventEmitter();
    @Output() flag = new EventEmitter();
    recipes = recipes;

    getRecipe(id: number) {
        return this.recipes[id];
    }

    onClick(id: number){
        this.id.emit(id);
        this.flag.emit(true);
    }
}