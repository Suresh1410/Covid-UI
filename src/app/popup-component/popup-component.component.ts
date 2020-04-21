import { NgbActiveModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.scss']
})
export class PopupComponentComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<boolean>();
  donateForm : FormGroup;
  constructor(public modal: NgbActiveModal,
    private _formBuilder: FormBuilder) { }

    ngOnInit() {
    this.donateForm = this._formBuilder.group({
      quantity:['', Validators.required],
      address:['', Validators.required],
      phoneNo:['', Validators.required],
      donationDate:['', Validators.required],
    });
  }
  /**
   * close the popup
   * @param event 
   */
  onCloseModal(event):void{
    this.closeModalEvent.emit(false);  
  }
}
