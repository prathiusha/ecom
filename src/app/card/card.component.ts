import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CartService} from '../../app/services/cart.service';
export class product{
  constructor(
    public id:number,
    public title:string,
    public description:string,
    public price:string,
    public discountPercentage:number,
    public thumbnail:string
  ){}
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  products: product[] = [];
constructor(private http: HttpClient){} // old ways of injecting service
cartService=inject(CartService); // new way of injecting

ngOnInit():void{
this.getMethod();
}
public getMethod(){
  this.http.get<any>('https://dummyjson.com/products').subscribe((data)=>{
    console.log(data);
    if (data && data.products) {
      this.products = data.products;
    } else {
      console.error('Products data not found in API response:', data);
    }
  });
}
addToCart(product:any){
  this.cartService.addToCart(product);
}
cartItems( ){
  this.cartService.getCartCount();
  }


}
