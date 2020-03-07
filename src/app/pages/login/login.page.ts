import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataService } from 'src/app/shared/data.service';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    id: null,
    pass: null
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private data: DataService,
  ) {
    // this.authService.logout();
  }

  ionViewWillEnter() {
    this.credentials = {
      id: null,
      pass: null
    };
  }

  ngOnInit() {
  }

  login() {

    // this.data.presentLoading('Logging In...');

    let user = { uid: this.credentials.id , role: 'STUDENT', token: '', tpc: false, student: true };

    this.authService.login(this.credentials);
      // .subscribe(res => {
      //   setTimeout(() => {
      //     this.data.loading.dismiss();
      //     user.token = res['token']
      //     if(res['tpc'] == true) {
      //       user.tpc = true;
      //     }
  
      //     this.authService.authenticationState.next(user);
  
      //     this.storage.set(TOKEN_KEY, user);
      //     this.router.navigateByUrl('/passenger-dashoard');
      //   }, 100);
      // }, err => {
      //   setTimeout(() => {
      //     this.data.loading.dismiss();
      //     // console.log(err);
      //     this.data.presentAlert('Error', err.error.message);
      //   }, 100);
      // })
  }

}
