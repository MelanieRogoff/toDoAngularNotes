import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})

export class FormArrayComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { 

    this.checkoutForm = formBuilder.group({
      emailAddr: ['', [Validators.required, Validators.email]],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: ['5'],
          itemName: ['Pancakes'],
          itemDescription: ['Banana Pancakes'],
          itemsDone: ['', Validators.requiredTrue]
        }),
        // this.formBuilder.group({ //Example of nested form
        //   taskId: ['1'],
        //   taskName: ['Create component']
        // })
      ])
    });
  }

  checkoutForm: FormGroup;

  ngOnInit(): void {
    console.log(this.checkoutForm.get('items').value.length); //gives the length of the form's item group
    console.log(this.checkoutForm.get('items').value); //gives the entire object of the array
    let itemVal = this.checkoutForm.get('items').value;
    console.log(itemVal[0].itemName); //gives the itemName 1st object in the array

    this.checkoutForm.get('items').setValue([{
          itemId: ['14'],
          itemName: ['Learning'],
          itemDescription: ['Angular'],
          itemsDone: ['', Validators.requiredTrue]
    }]);
  }

  get items() { //this will allow us to use functions such as push(), pop() since it'll turn this into a Form Array
    return this.checkoutForm.get('items') as FormArray; //this returns all of the items as a Form Array
  }

  addNewItem() { //when a user clicks on add new row, a new element will be inserted into the Form Array titled items
    
    //First, let's set a const that grabs the length of the items array:
    const itemLength = this.items.length;
    
    //Then, we create a new FormGroup
    const newItem = this.formBuilder.group({
      itemId: [itemLength + 1], //doing this so that it's dynamic
      itemName: [''],
      itemDescription: [''],
      itemsDone: ['', Validators.requiredTrue],
    });

    this.items.push(newItem); //we then push this new array INTO the items Form Array
  }

  postData() {
    console.log(this.checkoutForm);
  }

  removeItem(index) {
    const arr = this.items.length; 
    this.items.removeAt(index);
  }

}
