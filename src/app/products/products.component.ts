import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
http = inject (HttpClient);
products:any=[];
ngOnInit(): void {
  this.getMethod();
}
public getMethod(){
  this.http.get('https://dummyjson.com/products').subscribe((products:any)=>{
    console.log(products);
    
  });
}
}
