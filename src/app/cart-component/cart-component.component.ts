import { Component, inject,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
//import {card} from '../card/card.component';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.css'
})
export class CartComponentComponent {
cartService=inject(CartService);
cartOpen=false
ngOnInit() {
  this.cartService.cartOpen.subscribe(cartOpen => {
    this.cartOpen = cartOpen;
  });
}
deleteFromCart(item : any){
this.cartService.delete(item);
}

}
