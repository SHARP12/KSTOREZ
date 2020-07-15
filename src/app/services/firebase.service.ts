import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import {Router} from'@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {  

  constructor(private firestore: AngularFirestore,private alertController:AlertController,public router:Router) { }
  
 //function that sends an alert
 async presentAlert(noti_header:string,noti_subheader:string,noti_message:string){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: noti_header,
    subHeader: noti_subheader,
    message: noti_message,
    buttons: ['OK']
  });  
   alert.present();
}
//refs for both orders and payments
order_ref = Math.floor(Date.now()/1000);
id =this.order_ref.toString();
//function that inserts orders in a database
createOrder(data) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("Orders").doc(this.id).set(data)         
          .then(res => {
           this.presentAlert("Order Received","Successfully ordered","We have received your order. we are now processing it.");
          }, err => reject(err));
  });
}

//function that inserts payment details into the database
createPayment(data) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("Payments")
          .doc(this.id).set(data)
          .then(res => {
           this.presentAlert("Payment successful","Successfully paid","You have successfully paid for your order");
          }, err => reject(err));
  });
}
//function that updates the orders
updateOrder(data,id:string) {
  return new Promise<any>((resolve, reject) =>{
    this.firestore
    .collection("Orders")
    .doc(id)
    .update(data)
        .then(res => {
          this.router.navigateByUrl('/tabs/tab1');
        }, err => reject(err));
});     
      
}
}
