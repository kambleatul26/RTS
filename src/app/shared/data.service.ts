import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getTrains() {
    const XURL = this.config.getURL() + '/train/getAllTrains';
    return this.http.get(XURL);
  }

  getTrainDetail(id) {
    let params = new HttpParams();
    params = params.append('trainID', id);
    console.log(id);
    const XURL = this.config.getURL() + '/train/getTrain';
    return this.http.get(XURL, {
      params : params
    });
  }
}
