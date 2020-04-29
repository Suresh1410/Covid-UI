import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
 loggedInUser;

  getAllPosts() {
    let url = "http://localhost:8080/api/v1/getAllPostInfo";
    return this.http.get<any>(url);
  }

  getAllPostsByUser(userId) {
    let url = "http://localhost:8080/api/v1/getAllPostByUser/"+userId;
    return this.http.get<any>(url);
  }
  
  addNewPost(request) {
    let url = "http://localhost:8080/api/v1/createPost";  
    return this.http.post<any>(url, request);
  }

  checkLogin(request) {
    let url = "http://localhost:8080/api/v1/login";  
    return this.http.post<any>(url, request);
  }

  updateQuantity(request) {
    let url = "http://localhost:8080/api/v1/updateQuantity";  
    return this.http.put<any>(url, request);
  }

  createUser(request){
    let url = "http://localhost:8080/api/v1/createUser";  
    return this.http.post<any>(url, request);
  }
  
}