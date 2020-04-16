import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {

  postForm: FormGroup;
  @ViewChild('requestDate', { static: false }) requestDate: NgbDatepicker;
  @ViewChild('requestEndDate', { static: false }) requestEndDate: NgbDatepicker;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.postForm = this.formBuilder.group({
      
      type: [""],
      subType:[""],
      quantity: [""],
      description: [""],
      useExistingAddress: ["yes"],
      requestDate: [""],
      requestEndDate:[""],
      address1: [""],
      address2: [""],
      address3: [""],
      city: [""],
      state: [""],
      country:[""],
      pinCode: [""],
      phone: [""],
      email: [""]
    });
  }

  onSubmit(){
    console.log(this.postForm.getRawValue());
  }

  dateFormatter(event) {
    if (event.target.value.length === 4 || event.target.value.length === 7) {
        if (event.keycode !== 8) {
            event.target.value += "-";
        }
    }
}

restrictAlphabets(event) {
  let pattern = /^[0-9]+$/;
  return pattern.test(event.key);
}

}
