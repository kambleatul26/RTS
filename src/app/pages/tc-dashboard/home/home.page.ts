import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
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


  onTrainClick() {
    console.log('sss');
    this.router.navigate(['tc-dashboard/menu/train-details']);
  }
}
