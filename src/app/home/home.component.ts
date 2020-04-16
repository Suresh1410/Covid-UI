import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeForm: any;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      postDetails: new FormArray([this.post()])
    });
    this.addPostDetails();
  }

  addPostDetails() {
    this.postDetails.push(this.post());
  }
post(): FormGroup {
   return this.fb.group({
     type:'Food',
     subType:'Milk',
     quantity:'5',
     description: 'Cow Milk',
     endDate:'18/04/2020',
     address:'Bhagalpur'
   })
}
 

  get postDetails(): FormArray {
    return this.homeForm.get('postDetails') as FormArray;
}

}
