import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: Observable<any[]>;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

 //Declaring an array to hold the product items
 public itemList: any[];

 
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
 
  constructor(private cartService: CartService, private modalCtrl: ModalController,private firestore: AngularFirestore) {
    
  }
 
  async ngOnInit() {
    //this.items = this.cartService.retrieve_products();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.itemList = await this.initializeItems();
  }
//function to fetch the items when a query is to be performed
  async initializeItems(): Promise <any>{
    const itemList = await this.firestore.collection('items').valueChanges().pipe(first()).toPromise();
    return itemList;
    
  }
//function to filter the items when the user starts the search task
async filterList(evt){
  this.itemList = await this.initializeItems();
  const searchTerm = evt.srcElement.value;
  if(!searchTerm){
    return;
  }
  this.itemList = this.itemList.filter(currentItem => {
    if (currentItem.ProductName && searchTerm) {
      return (currentItem.ProductName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
  });
} 

  addToCart(product) {
    this.cartService.addProduct(product);
  
  }
 

}
