import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collect-payment',
  templateUrl: './collect-payment.component.html',
  styleUrls: ['./collect-payment.component.scss']
})
export class CollectPaymentComponent implements OnInit {

  arrow = faArrowRight;
  
  constructor() { }

  ngOnInit(): void {
  }

}
