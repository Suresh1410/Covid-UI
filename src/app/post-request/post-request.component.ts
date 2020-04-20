import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent  implements OnInit {
  isVertical = false;

  @HostListener('window:resize') onWindowResize() {

    if (window.innerWidth <= 768) {
      this.isVertical = true;
    } else {
      this.isVertical = false;
    }
  }

requirementDetails: FormGroup;
  addressDetails: FormGroup;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.requirementDetails = this._formBuilder.group({
      type: ['', Validators.required],
      subType:['', Validators.required],
      quantity:['', Validators.required],
      description:['', Validators.required],
      requestDate:['', Validators.required],
      endDate:['', Validators.required],
    });
    this.addressDetails = this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country:['', Validators.required],
      pinCode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      useExistingAddress :[false]
    });
  }

  dateFormatter(event) {
    if (event.target.value.length === 4 || event.target.value.length === 7) {
        if (event.keycode !== 8) {
            event.target.value += "/";
        }
    }
}

restrictAlphabetsAndSlash(event) {
  let pattern = /^[0-9//]+$/;
  return pattern.test(event.key);
}
onSubmit(){

}

}


  

