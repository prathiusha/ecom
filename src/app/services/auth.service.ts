import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login(Name:string,Password:string){
    if(Name==='prathi' && Password==='12345'){
      return 200;
    }else{
      return 403;
    }
  }
  logout(){
    this.router.navigate(['login'])
  }
}
