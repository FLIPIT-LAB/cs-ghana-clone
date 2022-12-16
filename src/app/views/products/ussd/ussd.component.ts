import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ussd',
  templateUrl: './ussd.component.html',
  styleUrls: ['./ussd.component.scss']
})
export class UssdComponent implements OnInit {

  arrow = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
