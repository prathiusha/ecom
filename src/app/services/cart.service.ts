import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:any[]=[];
  private total:number=0;
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount = this.cartCountSubject.asObservable();
  private cartOpenState=new BehaviorSubject<boolean>(false);
  cartOpen=this.cartOpenState.asObservable();

  constructor() { }
  addToCart(product:any){
    const existingItem = this.items.find((item) => item.id === product.id);

   
    if (existingItem) {
      existingItem.quantity++;
      this.getCartCount();
    } else {
      
      this.items.push({ ...product, quantity: 1 });
    }
    
  }
  getItems(){
    return this.items;
  }
  delete(item:any){
    this.items=this.items.filter((i)=> i.id !== item.id);
    this.getCartCount();
  }

  incQuantity(id : number){
let item=this.items.find((i)=>i.id == id);
if(item){
  item.quantity++;
  this.getCartCount();
}
  }

    getTotal(){
      return this.items.reduce((acc,item)=>{
        return this.total=acc+ item.price * item.quantity;
      },0);
    }
    decQuantity(id : number){
      let item=this.items.find((i)=>i.id == id);
      if(item && (this.total> 0)){
        item.quantity--;
        this.getCartCount();
      }

        }
         getCartCount() {
          let count = 0;
          this.items.forEach(item => {
            count += item.quantity;
          });
          this.cartCountSubject.next(count);
        }
        
        toggleCart(){
          this.cartOpenState.next(!this.cartOpenState.value);
        }


}
