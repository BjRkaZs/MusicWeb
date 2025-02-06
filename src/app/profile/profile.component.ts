import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  regModel:any={}
  currentUser:any={}
  newPassword1:any
  newPassword2:any
  id:any

  constructor(private auth:AuthService, private aroute: ActivatedRoute, private router:Router){

    aroute.paramMap.subscribe(
      (params:any)=>{
        if (!params.params.id){
          this.id=null
          this.auth.getCurrentUser().subscribe(
            (user:any)=>{
              this.currentUser=user
              if (user){
                console.log(user)
                this.regModel.uname=user.uname;
                this.regModel.email=user.email
              }                 
        })
        }
        else{
          this.id=params.params.id
          this.auth.getUser(this.id).subscribe(
            (user:any)=>{
              this.currentUser=user
              if (user){
                console.log(user)
                this.regModel.uname=user.uname;
                this.regModel.email=user.email
              }                 
            }
          )

        }
      }
    )
  }

}
