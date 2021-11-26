import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalController, NavController } from '@ionic/angular';
import { ImgmodalPage } from '../imgmodal/imgmodal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {
  url = 'https://randomuser.me/api/?page=1&results=2&seed=feed';
  charList= [];
  data ;
  statusList = [
    {
        name: 'John Watson',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx'
    },
    {
        name: 'Kenny Handerson',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRsaj20eAE3_QN-Afw6GUAcvWVVTA9PlqeVuwB5pIH41qv5kxZ'
    },
    {
        name: 'David Nick',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o'
    },
    {
        name: 'Warner Lin',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0FoSc8DAoqb-_Nve8lxk_lgtnSuAeqGA-zYjC6tENDkTaTrD7'
    },
    {
        name: 'Anderson',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_k8OI5LCICslf_OzVMBzMMA7GblWc4iL0hCL0m7jXON3GNDwH'
    }
  ];

  constructor(
    private http: HttpClient,
    // private router : Router,
    public nav: NavController
  ) {
  }

  profile(user){
    console.log("asfasfafasfa",user);
    this.nav.navigateForward('/profile', { state: user });
  }

  

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ionViewWillEnter(){
    this.loadContent()
        .subscribe(data => {
          this.data = data;
          this.data = this.data.results;
      });
  }

  loadContent() : Observable<object> {
    return this.http.get(this.url);    
  }

  loadMoreChars(event){
    setTimeout(()=> {
      let newArray = [...this.data];
      newArray = newArray.reverse();
      this.data = this.data.concat(
        newArray
      );
      event.target.complete();
    },1000);
  }



}
