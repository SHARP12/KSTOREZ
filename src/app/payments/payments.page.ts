import { Component, OnInit } from '@angular/core';
declare var myTest: any;
declare var makePayment: any;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  pay() {
    //alert("hello");
    //myTest();
    makePayment();
  }

  constructor() { }

  ngOnInit() {
  }

}
