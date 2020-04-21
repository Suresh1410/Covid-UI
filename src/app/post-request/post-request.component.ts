import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ThemePalette } from '@angular/material/core';
import { CommonService } from '../common.service';

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

  constructor(private _formBuilder: FormBuilder,
  private commonService:CommonService) {}

  ngOnInit() {
    this.createForm();
    

  }

  createForm(){
    this.requirementDetails = this._formBuilder.group({
      type: ['', Validators.required],
      subType:['', Validators.required],
      quantity:['', Validators.required],
      description:['', Validators.required],
      requestDate:['', Validators.required],
      endDate:['', Validators.required],
      recurring:['', Validators.required]
    });
    this.addressDetails = this._formBuilder.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      address3: [''],
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
  let request = {
"postDesc" : this.requirementDetails.controls.description.value,
"postCreateDate" : "43939",
"postRequestDate" : "43941",
"postEndDate" : "43946",
"type" : this.requirementDetails.controls.type.value ?this.requirementDetails.controls.type.value :"" ,
"subType" : this.requirementDetails.controls.subType.value,
"quantity" : this.requirementDetails.controls.quantity.value,
"recurring" :  this.requirementDetails.controls.recurring.value,

"isRegisteredAddress" : this.addressDetails.controls.useExistingAddress.value+"",

"mailId" : this.addressDetails.controls.email.value,
"addLine1" : this.addressDetails.controls.address1.value,
"addLine2" :this.addressDetails.controls.address2.value,
"addLine3" : this.addressDetails.controls.address3.value,
"city" : this.addressDetails.controls.city.value,
"state" : this.addressDetails.controls.state.value,
"pincode" : this.addressDetails.controls.pinCode.value,
"country" : this.addressDetails.controls.country.value,
"location" : "43.53",
"landMark" : "Techie Guy",
"addressId" : "",
"addressType" : "1",
"addressLabel" : "test",
"userId" : "1",
"status" : "2",


  }
  this.commonService.addNewPost(request).subscribe((res)=>{
    console.log(res);
  });

}

}


  

