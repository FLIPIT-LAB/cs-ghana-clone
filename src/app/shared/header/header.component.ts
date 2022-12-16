import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  apis(){
    window.location.href = 'https://docs.cross-switch.app/'
  }

  close(){
    // document.querySelectorAll('#close').click();
    // (<HTMLInputElement>document.getElementById("close")).click()
    }
}
