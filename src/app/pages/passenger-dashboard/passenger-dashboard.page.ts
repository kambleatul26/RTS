import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.page.html',
  styleUrls: ['./passenger-dashboard.page.scss'],
})
export class PassengerDashboardPage implements OnInit {

  backButtonSubscription;
  user;

  public appPages = [
    {
      title: 'Pass Home',
      url: '/passenger-dashboard/menu/home',
      icon: 'home'
    },
    {
      title: 'Trains',
      url: '/passenger-dashboard/menu/trains',
      icon: 'home'
    },
    {
      title: 'Notifications',
      url: '/passenger-dashboard/menu/notifications',
      icon: 'home'
    },
    {
      title: 'Occupy Status',
      url: '/passenger-dashboard/menu/indicator',
      icon: 'home'
    }
  ];

  selectedPath = '';

  constructor(
    private router: Router,
    private navCtrl:NavController,
    private authService: AuthService,
    private storage: Storage,
    private plt: Platform
  ) {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   this.selectedPath = event.url;
    // });

    this.user = this.authService.isAuthenticated();    
  }

  toTC() {
    this.user.role = 'TC'; 
    this.storage.set(TOKEN_KEY, this.user);
    this.navCtrl.navigateRoot('tc-dashboard');
    // setTimeout(() => {
    //   location.reload();
    // }, 1000);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.backButtonSubscription = this.plt.backButton.subscribe(() => {
    //   navigator['app'].exitApp();
    // });
  }
  
  ngOnDestroy() {
    // this.backButtonSubscription.unsubscribe();
  }

}
