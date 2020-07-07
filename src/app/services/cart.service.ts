import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

 
export interface Product1 {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
}
export interface Product {
  id: number;
  
  ProductName: string;
  Price: number;
  Amount: number;
  Description: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Observable<any[]>;
  //this code is to be replaced with actual firebase values
  
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('Products').valueChanges();

  }

  //Method to retrieve from firebase.
  retrieve_products(): Observable<Product[]>{ 
   return this.items; 
  }
 
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.ProductName === product.ProductName) {
        p.Amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.Amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.ProductName === product.ProductName) {
        p.Amount -= 1;
        if (p.Amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.ProductName === product.ProductName) {
        this.cartItemCount.next(this.cartItemCount.value - p.Amount);
        this.cart.splice(index, 1);
      }
    }
  }
}