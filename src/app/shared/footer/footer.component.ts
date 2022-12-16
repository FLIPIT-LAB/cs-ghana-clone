import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  apis(){
    window.location.href = 'https://docs.cross-switch.app/'
  }
  linkedin(){
    window.location.href = 'https://www.linkedin.com/company/cross-switch-ghana/'
  }
  instagram(){
    window.location.href = 'https://www.instagram.com/cross_switchgh/'
  }
  twitter(){
    window.location.href = 'https://twitter.com/cross_switchgh'
  }
  facebook(){
    window.location.href = 'https://www.facebook.com/profile.php?id=100086458220883'
  }
  
}
