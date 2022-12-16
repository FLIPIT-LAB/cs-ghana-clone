import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-develop-friendly',
  templateUrl: './develop-friendly.component.html',
  styleUrls: ['./develop-friendly.component.scss']
})
export class DevelopFriendlyComponent implements OnInit {

  arrow = faArrowRight;
  
  constructor() { }

  ngOnInit(): void {
  }

  apis(){
    window.location.href = 'https://docs.cross-switch.app/'
  }

}
