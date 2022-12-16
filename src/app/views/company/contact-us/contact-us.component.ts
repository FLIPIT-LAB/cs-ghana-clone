import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  arrow = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

  visit(){
    window.location.href = 'https://g.page/alias-solutions-limited?share'
  }
  
}
