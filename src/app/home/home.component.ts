import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { CommonService } from '../common.service';
import { PopupComponentComponent } from '../popup-component/popup-component.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeForm: any;
  foodPostDetails: PostDetails[] = [];
  clothesPostDetails: PostDetails[] = [];
  otherPostDetails: PostDetails[] = [];
  postDetailsArray: PostDetails[] = [];


  constructor(private fb: FormBuilder, private commonService: CommonService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      type: new FormControl('all')
    });
    this.commonService.getAllPosts().subscribe((res) => {
      console.log(res);
      this.postDetailsArray = res;
      this.filterType();
    });



  }

  calculateProgress(post: PostDetails) {
    if (post.quantityRaised == 0) {
      post.progress = 0;
    } else {
      let progress = (post.quantityRaised / post.quantity) * 100;
      if(progress>100){
        progress=100;
      }
      post.progress = progress;
    }
  }

  filterType() {
    this.foodPostDetails = this.postDetailsArray.filter(postDetails => postDetails.type == "Food" || postDetails.type == "food");
    this.clothesPostDetails = this.postDetailsArray.filter(postDetails => postDetails.type == "Clothes" || postDetails.type == "clothes");
    this.otherPostDetails = this.postDetailsArray.filter(postDetails => !((postDetails.type == "Clothes") || (postDetails.type == "Food") || (postDetails.type == "clothes") || (postDetails.type == "food")));

    console.log("Food => " + this.foodPostDetails.length)
    console.log("Clothes => " + this.clothesPostDetails)
    console.log("Other => " + this.otherPostDetails.length)


  }

  openDonationForm(post) {
    let modalRef = this.dialog.open(PopupComponentComponent, {
      height: '400px',
      width: '600px',
      data: post
    })
  }


}

export class PostDetails {
  addLine1: string
  addLine2: string
  addLine3: string
  addressId: number
  addressLabel: string
  addressType: number
  city: string
  country: string
  landMark: string
  location: string
  mailId: string
  phone:string
  pincode: string
  postId: number
  postCreateDate: string
  postDesc: string
  postEndDate: string
  postRequestDate: string
  quantity: number
  recurring: string
  registeredAddress: boolean
  state: string
  status: string
  subType: string
  type: string
  userId: number
  quantityRaised: number;
  progress?;
  userName:String
}