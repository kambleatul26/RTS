import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loading;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) { }

  async presentLoading(msg) {
    this.loading = await this.loadingCtrl.create({
      spinner: 'lines-small',
      message: msg,
      translucent: true,
      cssClass: 'custom-loading'
    });
    return await this.loading.present();
  }

  async presentAlert(header, msg) {
    const alert = await this.alertCtrl.create({
      header: header,
      // subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
