import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-request-to-pay',
  templateUrl: './request-to-pay.component.html',
  styleUrls: ['./request-to-pay.component.scss']
})
export class RequestToPayComponent implements OnInit {

  arrow = faArrowRight;
  
  constructor() { }

  ngOnInit(): void {
  }

}
