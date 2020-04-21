import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { CommonService } from '../common.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeForm: any;
  foodPostDetails:PostDetails[] = [];
  clothesPostDetails:PostDetails[] = [];
  otherPostDetails:PostDetails[] = [];
  postDetailsArray: PostDetails[] = []

  constructor(private fb: FormBuilder,private commonService:CommonService) {
  }

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      type:new FormControl('all')
    });
 this.commonService.getAllPosts().subscribe( (res)=>{
      console.log(res);
      this.postDetailsArray=res;
      this.filterType();
      });
      
   
   
  }

  filterType(){    
      this.foodPostDetails=this.postDetailsArray.filter(postDetails => postDetails.type =="Food" ||postDetails.type =="food" );    
      this.clothesPostDetails=this.postDetailsArray.filter(postDetails => postDetails.type =="Clothes" || postDetails.type =="clothes");
      this.otherPostDetails=this.postDetailsArray.filter(postDetails => !((postDetails.type =="Clothes")||(postDetails.type =="Food")||(postDetails.type =="clothes")||(postDetails.type =="food")));

      console.log("Food => "+ this.foodPostDetails.length)
      console.log("Clothes => "+ this.clothesPostDetails)
      console.log("Other => "+ this.otherPostDetails.length)
      

  }

 
}

export class PostDetails {
addLine1: string
addLine2:string
addLine3: string
addressId: number
addressLabel: string
addressType: number
city: string
country: string
landMark: string
location: string
mailId: string
pincode: string
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

}