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
  trainsCopy;
  search;

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.presentLoading('Please Wait...');
    this.dataService.getTrains().subscribe(data => {
      this.trains = data;
      this.trainsCopy = data;
      console.log(this.trains);
      this.dataService.loading.dismiss();
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

  check() {
    this.trainsCopy = this.trains.filter(t => {
      return (t.name.includes(this.search) || t.number.toString().includes(this.search));
    });
  }

  onTrainClick(trainId) {
    this.router.navigate(['tc-dashboard/menu/train-details'], {
      queryParams: {
        trainId
      }
    });
  }

  onLocClick(trainId) {
    this.router.navigate(['tc-dashboard/menu/loc-list'], {
      queryParams: {
        trainId
      }
    });
  }
}
