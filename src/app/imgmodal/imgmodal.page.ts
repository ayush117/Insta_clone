import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgmodal',
  templateUrl: './imgmodal.page.html',
  styleUrls: ['./imgmodal.page.scss'],
})
export class ImgmodalPage implements OnInit {
  @Input() img: string;
  
  constructor() { 
    console.log(this.img);
  }

  ngOnInit() {
  }

}
