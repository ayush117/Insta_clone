import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImgmodalPage } from '../imgmodal/imgmodal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController) {
    
  }

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
