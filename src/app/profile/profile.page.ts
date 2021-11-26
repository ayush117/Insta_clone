import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImgmodalPage } from '../imgmodal/imgmodal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  getValue: any;
  sub: any;
  id: any;
  name: '';
  username: '';
  age: '';
  img: '';

  constructor(public router: Router,
    public modalController: ModalController
    ){
    if (router.getCurrentNavigation().extras.state) {
          const user = this.router.getCurrentNavigation().extras.state;
          console.log(user);
          this.name = user.name.first + user.name.first;
          this.username = user.login.username;
          this.age = user.registered.age;
          this.img = user.picture.thumbnail;
        }
    }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  big(item){
    this.presentModal(item.target.src);
  }

  async presentModal(src) {
    const modal = await this.modalController.create({
      component: ImgmodalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'img': src
      }
    });
    return await modal.present();
  }
}
