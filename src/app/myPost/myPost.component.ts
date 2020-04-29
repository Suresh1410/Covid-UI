import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { PostDetails } from '../home/home.component';

@Component({
  selector: 'app-my-post',
  templateUrl: './myPost.component.html',
  styleUrls: ['./myPost.component.scss']
})
export class MyPostComponent implements OnInit {
  postDetails=[{
    'type':'food',
    'subType':'milk',
    'postDesc':'I need 5 ltrs of milk immediately',
    'quantity':5,
    'city':'bhagalpur',
    'postEndDate':'26/12/2020'
  },
  {
    'type':'food',
    'subType':'milk',
    'postDesc':'I need 5 ltrs of milk immediately',
    'quantity':5,
    'city':'bhagalpur',
    'postEndDate':'26/12/2020'
  },
  {
    'type':'food',
    'subType':'milk',
    'postDesc':'I need 5 ltrs of milk immediately',
    'quantity':5,
    'city':'bhagalpur',
    'postEndDate':'26/12/2020'
  },
  {
    'type':'food',
    'subType':'milk',
    'postDesc':'I need 5 ltrs of milk immediately',
    'quantity':5,
    'city':'bhagalpur',
    'postEndDate':'26/12/2020'
  }]

  userId;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.userId=this.commonService.loggedInUser.userId;
    this.getUserPosts();
  }

  getUserPosts(){
    this.commonService.getAllPostsByUser(this.userId).subscribe((res)=>{
      console.log(res);
      this.postDetails=res;
    })
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

}
