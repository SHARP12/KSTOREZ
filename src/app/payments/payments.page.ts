import { Component, OnInit } from '@angular/core';
import { NgForm ,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
declare var makePayment: any;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})

export class PaymentsPage implements OnInit { 
  amount:number=100;
  name :string; 
  town :string;
   phone :string;
   email:string;
    ship_address:string;
    pay_method :string; 
  constructor(public alertController: AlertController) { }
    
    ngOnInit() {    
    }
    async presentAlert(){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Notification',
        subHeader: 'Your Order',
        message: 'KSTOREZ has recieved Your order, you will receive your order 2hrs from now. please ensure keep your phone is on.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  pay() { 
    if(this.pay_method == "momo"){
      makePayment(this.pay_method,this.email,this.phone,this.name);
    } else{
      this.presentAlert();
    }
    
  }  
  
}
