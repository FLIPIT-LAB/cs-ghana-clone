import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bulk-pay',
  templateUrl: './bulk-pay.component.html',
  styleUrls: ['./bulk-pay.component.scss']
})
export class BulkPayComponent implements OnInit {
  arrow = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
