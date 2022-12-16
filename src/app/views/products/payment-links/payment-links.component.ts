import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-links',
  templateUrl: './payment-links.component.html',
  styleUrls: ['./payment-links.component.scss']
})
export class PaymentLinksComponent implements OnInit {

  arrow = faArrowRight;
  
  constructor() { }

  ngOnInit(): void {
  }

}
