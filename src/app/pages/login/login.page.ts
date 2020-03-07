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
    aadhaar: 674611536346,
    pass: 'manas12345'
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private data: DataService,
  ) {
    // this.authService.logout();
  }

  ngOnInit() {
  }

  login() {

    this.data.presentLoading('Logging In...');

    let user = { uid: this.credentials.aadhaar , role: 'PASS', token: '', tc: false, pass: true };

    this.authService.login(this.credentials)
      .subscribe(res => {
        setTimeout(() => {
          this.data.loading.dismiss();
          user.token = res['token']
          if(res['TC'] == true) {
            user.tc = true;
          }
          console.log(user);
          this.authService.authenticationState.next(user);
          this.storage.set(TOKEN_KEY, user);
          this.router.navigate(['passenger-dashboard']);
        }, 100);
      }, err => {
        setTimeout(() => {
          this.data.loading.dismiss();
          // console.log(err);
          this.data.presentAlert('Error', err.error.message);
        }, 100);
      })
  }

}
