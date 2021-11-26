import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImgmodalPage } from '../imgmodal/imgmodal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  url = 'https://picsum.photos/id/';
  a = [1,2,3,1,1,1,1,1,1,1,1];
  
  constructor(public modalController: ModalController,) {}

  big(img){
    this.presentModal(img.target.src);
    console.log(img.target.src);
  }

  async presentModal(src) {
    const modal = await this.modalController.create({
      component: ImgmodalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'img': src,
      }
    });
    return await modal.present();
  }

  
  
}
