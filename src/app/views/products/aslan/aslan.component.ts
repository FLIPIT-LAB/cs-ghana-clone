import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aslan',
  templateUrl: './aslan.component.html',
  styleUrls: ['./aslan.component.scss']
})
export class ASLANComponent implements OnInit {

  arrow = faArrowDown;
  
  constructor() { }

  ngOnInit(): void {
  }

}
