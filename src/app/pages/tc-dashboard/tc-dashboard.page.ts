import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-tc-dashboard',
  templateUrl: './tc-dashboard.page.html',
  styleUrls: ['./tc-dashboard.page.scss'],
})
export class TCDashboardPage implements OnInit {

  backButtonSubscription;
  user;

  public appPages = [
    {
      title: 'TC Home',
      url: '/tc-dashboard/menu/home',
      icon: 'home' 
    }
  ];

  selectedPath = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
    private storage: Storage,
    private plt: Platform
  ) {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   this.selectedPath = event.url;
    // });

    this.user = this.authService.isAuthenticated();    
  }

  toPASS() {
    this.user.role = 'PASS'; 
    this.storage.set(TOKEN_KEY, this.user);
    this.navCtrl.navigateRoot('passenger-dashboard');
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
