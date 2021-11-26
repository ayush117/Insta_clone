import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// import { AngularFireAuth } from "@angular/fire/auth";
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    // public ngFireAuth: AngularFireAuth,
    // private firebaseAuthentication: FirebaseAuthentication,
    // public ngFireAuth: AngularFireAuth,
  ){

  }

  ngOnInit() {
  }

  SignIn(email, password) {
    // return this.ngFireAuth.signInWithEmailAndPassword(email, password)
    // return this.firebaseAuthentication.signInWithEmailAndPassword(email, password)
  }

  // logIn(email, password) {
  //   this.authService.SignIn(email.value, password.value)
  //     .then((res) => {
  //       if(this.authService.isEmailVerified) {
  //         this.router.navigate(['dashboard']);          
  //       } else {
  //         window.alert('Email is not verified')
  //         return false;
  //       }
  //     }).catch((error) => {
  //       window.alert(error.message)
  //     })
  // }

}
