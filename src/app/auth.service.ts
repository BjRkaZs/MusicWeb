import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://67a543fac0ac39787a1de244.mockapi.io/mockapi/music/';
  private token = ""
  private user:any={}
  private userSub = new BehaviorSubject(null)
  public SadminSub = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient) { }

  logout(){
    this.token=""
    this.user=null
    this.SadminSub.next(false)
    this.userSub.next(null)
  }

  getCurrentUser(){
    return this.userSub
  }

  getUsers(){
    let headers = new HttpHeaders().set("Authorization","Bearer "+this.token)
    return this.http.get(this.apiUrl+"userlist",{headers: headers})
  }

  getUser(id:any){
    let headers= new HttpHeaders().set("Authorization","Bearer "+this.token)
    return this.http.get(this.apiUrl+"user/"+id, {headers:headers})
  }

  getClaims(id:any){
    let headers= new HttpHeaders().set("Authorization","Bearer "+this.token)
    return this.http.get(this.apiUrl+"userClaims/"+id, {headers:headers})
  }
  setClaims(id:any, claims:any){
    let body={id:id, roles:claims}
    let headers= new HttpHeaders().set("Authorization","Bearer "+this.token)
    return this.http.post(this.apiUrl+"userClaims/",body, {headers:headers})
  }

  register(user: any) {
    return this.http.post(this.apiUrl + "/Authorization/register", user);
  }
  
  // register(user:any){
  //   this.http.post(this.apiUrl + "/Authorization/register", user)
  //   .subscribe({
  //     next:()=>console.log("Success"),
  //     error:()=>console.log("Fail")
  //   })
  // }

  update(user:any){
    console.log("update",user)
    let head:any ={
      headers: new HttpHeaders().set("Authorization","Bearer "+this.token),
      'responseType':'text'
    }
  }

  
  login(user: any) {
    return this.http.post(this.apiUrl + "/Authentication/login", user);
  }  

}
