import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { filter, take, map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { FCM } from '@ionic-native/fcm/ngx';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  public authenticationState = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private router: Router,
    private config: ConfigService,
    private http: HttpClient,
    private fcm: FCM,
    private dataService: DataService
  ) {
    // RETURN VALUES THAT ARE NOT NULL (TO AVOID FIRST NULL VALUE)
    this.user = this.authenticationState.asObservable().pipe(
      filter(response => response)
    );
  }

  subscribeToTPC() {
    this.fcm.subscribeToTopic('TPC');
  }

  unSubscribeToTPC() {
    this.fcm.unsubscribeFromTopic('TPC');
  }

  loadUser() {
    this.storage.get(TOKEN_KEY).then(usr => {
      if (usr) {
        // console.log('Loaded User => ' + usr.uid);
        if (usr) {
          this.authenticationState.next(usr);
          // // console.log(usr);
          // if (usr.role == 'STUDENT') {
          //   this.router.navigate(['student-dashoard/menu/profile']);
          // } else {
          //   this.router.navigate(['tpcdashboard/menu/tpc-home']);
          // }
        } else {
          this.authenticationState.next({ uid: null, role: null });
        }
      }
    });
  }

  login(credentials) {
    // console.log(credentials);
    const uid = credentials.uid;
    const password = credentials.pass;

    const loginURL = this.config.getURL() + 'user/login';
    return this.http.post(loginURL, {
      uid,
      password
    }).pipe(take(1), map(value => {
      console.log(value);
      return value;
    }));

  }

  async logout() {
    await this.storage.set(TOKEN_KEY, null);
    this.authenticationState.next(null);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}