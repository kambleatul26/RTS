import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  trains;
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getTrains().subscribe(data => {
      this.trains = data;
      console.log(this.trains);
    });
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



  onTrainClick(trainId) {
    this.router.navigate(['tc-dashboard/menu/train-details'], {
      queryParams: {
        trainId
      }
    });
  }
}
