import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount=this.cartService.cartCount;
  constructor(private router:Router , private auth:AuthService,private cartService:CartService){}
  ngOnInit(){
this.cartCount.subscribe();
  }
  goToHome() {
    this.router.navigate(['home'])
  }
logout(){
  this.auth.logout();
}
getCartCount( ){
  this.cartService.getCartCount();
  }
  toggleCart(){
    this.cartService.toggleCart();
  }

}
