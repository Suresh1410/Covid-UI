
import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../common.service';
import { PostDetails } from '../home/home.component';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.scss']
})
export class PopupComponentComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<boolean>();
  donateForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PopupComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private commonService: CommonService) { }

  ngOnInit() {

    console.log(this.data);
    this.donateForm = this._formBuilder.group({
      quantity: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  /**
   * close the popup
   * @param event 
   */
  onCloseModal(event): void {
    this.closeModalEvent.emit(false);
  }

  updateQuantity() {
    let request :PostDetailsWithDonate=new PostDetailsWithDonate();
    request.quantityRaised=this.donateForm.controls.quantity.value;
    request.postId=this.data.postId;
    request.quantityRaised = this.donateForm.controls.quantity.value;
    request.donatorsList=[new DonatorDetails()];
    request.donatorsList[0].name= this.donateForm.controls.name.value;
    request.donatorsList[0].email= this.donateForm.controls.email.value;
    request.donatorsList[0].phone= this.donateForm.controls.phone.value;
    request.donatorsList[0].postId= this.data.postId;
    request.donatorsList[0].quantity= this.donateForm.controls.quantity.value;
    this.commonService.updateQuantity(request).subscribe((res) => {
      console.log(res);
      this.calculateProgress(this.data);
      this.dialogRef.close();
    })
  }
  calculateProgress(post: PostDetails) {
    post.quantityRaised +=Number(this.donateForm.controls.quantity.value);
      let progress = (post.quantityRaised / post.quantity) * 100;
      if(progress>100){
        progress=100;
      }
      post.progress = progress;    
  }
}

export class DonatorDetails{
  name:String
  postId:Number
  email:String
  phone:String
  quantity:String
}

export class PostDetailsWithDonate{
  postId:Number
  quantityRaised:Number
  donatorsList :DonatorDetails[]
}
