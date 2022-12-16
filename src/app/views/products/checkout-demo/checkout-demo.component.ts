import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout-demo',
  templateUrl: './checkout-demo.component.html',
  styleUrls: ['./checkout-demo.component.scss']
})
export class CheckoutDemoComponent implements OnInit {

  arrow = faArrowRight;
  
  constructor() { }

  ngOnInit(): void {
  }

}
