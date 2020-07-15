import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import {Router} from'@angular/router';
//declare let Email : any;
@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.page.html',
  styleUrls: ['./payment-confirm.page.scss'],
})
export class PaymentConfirmPage  implements OnInit {
  payment_results : string;
  
  constructor(private fbs:FirebaseService,public router:Router) { }  
  
  //function that checks the payment status
  check_payment_status():string{    
    const url= new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get('status');    
  }
  //function that returns the tx_ref
   get_text_ref():string{
    const url= new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get('tx_ref'); 
   }
   //function that returns the transaction_id
   get_transaction_id():string{
    const url= new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get('transaction_id');   
   }
   
  //function that handles successful payment  
   save_payment(){
    //if(this.check_payment_status()!= null){
    if(this.check_payment_status()=="successful"){
      //saving payment details in the database
      this.fbs.createPayment({
        reference_number:this.get_text_ref(),
        transaction_id:this.get_transaction_id()
      });
      //updating order status to paid      
      this.fbs.updateOrder(
        {status:"paid"},
        this.get_text_ref()
      );  
      this.router.navigateByUrl('/tabs/tab1'); 
     
    }else{
      //alert a failed payment
      this.payment_results = "Payment declined";
    }
  //}  
 }
  ngOnInit() {
  }

}
