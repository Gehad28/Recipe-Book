import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { recipes } from 'src/app/recipes';


@Component({
  selector: 'recipes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent{
  
  constructor(private formBuilder: FormBuilder) {}

  isClicked = false;
  recipes = recipes;
  id!: number;
  flag!: boolean;

  onClick() {
    this.isClicked = true;
    this.flag = false;
  }

  addRecipeForm = this.formBuilder.group({
    name: ['', Validators.required],
    url: ['', [Validators.required]],
    description: ['']
  })

  onSubmit(): void {
    let newRecipe = {
      name: String(this.addRecipeForm.get('name')?.value),
      url: String(this.addRecipeForm.get('url')?.value),
      description: String(this.addRecipeForm.get('description')?.value)
    }
    recipes.push(newRecipe);
    this.addRecipeForm.reset();
    this.isClicked = false;
  }

  onCancel(){
    this.isClicked = false;
    this.addRecipeForm.reset();
  }

  getListId(id: number){
    this.id = id;
  }

  getListFlag(flag: boolean){
    this.flag = flag;
  }

  
}
