import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-press',
  templateUrl: './company-press.component.html',
  styleUrls: ['./company-press.component.scss']
})
export class CompanyPressComponent implements OnInit {

  arrow = faArrowRight;
  
  constructor() { }

  ngOnInit(): void {
  }

  download(){
    window.location.href = 'https://crossswitch.sharepoint.com/:f:/s/CS-GH-Dev/ElIBUBORVTNDu3FDwpisMZ4B9VSg_L9ZE5nrC0ik1y4rbw?e=Qgbkdb'
  }
  visit(){
    window.location.href = 'https://g.page/alias-solutions-limited?share'
  }

}
