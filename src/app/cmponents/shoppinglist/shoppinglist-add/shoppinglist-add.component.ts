import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ShoppingList, shoppingList } from 'src/app/shoppinglist';

@Component({
  selector: 'app-shoppinglist-add',
  templateUrl: './shoppinglist-add.component.html',
  styleUrls: ['./shoppinglist-add.component.css']
})
export class ShoppinglistAddComponent {
  constructor(private formBuilder: FormBuilder) {}

  addListForm = this.formBuilder.group({
    name: '',
    amount: '',
    lists: this.formBuilder.array([])
  })

  get lists(){
    return this.addListForm.get('lists') as FormArray;
  }

  addList(){
    const listForm = this.formBuilder.group({
      name: '',
      amount: ''
    });
    this.lists.push(listForm);
  }

  onSubmit(): void {
    let newList = {
      name: String(this.addListForm.get('name')?.value),
      amount: String(this.addListForm.get('amount')?.value)
    }
    shoppingList.push(newList);
    let data = this.lists.controls.map(control => control.value);
    for(let i = 0; i < this.lists.length; i++){
      shoppingList.push(data[i]);
    }
    this.addListForm.reset();
  }
}
