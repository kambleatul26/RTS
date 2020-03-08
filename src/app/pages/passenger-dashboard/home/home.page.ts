import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user;
  constructor(private authService: AuthService, private alertCtrl: AlertController) {
    this.getUser();
  }

  ngOnInit() {
  }

  getUser() {
    this.authService.getUser().subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getUser();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Logout',
      message: 'Do You Want To Logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: () => {

          }
        }, {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.authService.logout()
          }
        }
      ]
    });
    await alert.present();
  }


}
