import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
Name="";
Password="";
errorMsg=""
constructor(private auth:AuthService,private router:Router) { }
//function for login
login(){
  //validating user input to not be empty
 if((this.Name.trim().length===0) && (this.Password.trim().length===0)){
  this.errorMsg="Username and password required";
 } else if(this.Name.trim().length===0){
  this.errorMsg="Username is required";
 }else if(this.Password.trim().length===0){
  this.errorMsg="Password is required";
 }else{
  this.errorMsg="";
  //verifies username and password match (both fields has been hard coded )
  let res=this.auth.login(this.Name,this.Password);
  if(res === 200){
this.router.navigate(['home']);
  }else if(res ===403){
    this.errorMsg="Invalid credentials";
  }
 }
}
}
