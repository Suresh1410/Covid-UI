import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }


  getAllPosts() {
    let url = "http://localhost:8080/api/v1/getAllPostInfo";
    return this.http.get<any>(url);
  }

  addNewPost(request) {
    let url = "http://localhost:8080/api/v1/createPost";  
    return this.http.post<any>(url, request);
  }
}
