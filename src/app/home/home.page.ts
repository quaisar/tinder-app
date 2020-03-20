import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  slideTopOpts = {
    loop: true,
    autoplay: {
      delay: 2000,
    }
  };
  slideBottomOpts = {
    slidesPerView: 1,
  };

}
