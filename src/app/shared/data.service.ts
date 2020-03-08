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
    const XURL = this.config.getURL() + 'train/getAllTrains';
    return this.http.get(XURL);
  }

  getBookingsPASS() {
    const BookingURL = this.config.getURL() + 'booking/getSelfBookings';
    return this.http.get(BookingURL);
  }

  getTrainDetail(id) {
    let params = new HttpParams();
    params = params.append('trainID', id);
    console.log(id);
    const XURL = this.config.getURL() + 'train/getTrain';
    return this.http.get(XURL, {
      params : params
    });
  }

  getPNRDetails(id) {
    let params = new HttpParams();
    params = params.append('bookingID', id);
    const getPNRDetailsURL = this.config.getURL() + 'booking/getBooking';
    return this.http.get(getPNRDetailsURL, {
      params: params
    })
  }

  occupySeat(bookingID, seats, location) {
    const occupySeatURL = this.config.getURL() + 'booking/occupySeats';
    return this.http.post(occupySeatURL, {
      bookingID,
      seats,
      location
    })
  }

  transferOwnership(bookingID, aadhaarNo) {
    const transferURL = this.config.getURL() + 'booking/transferOwnership';
    return this.http.post(transferURL, {
      bookingID,
      aadhaarNo
    })
  }

  updateLocation(body) {
    const updateURL = this.config.getURL() + 'train/updateTrainLocation';
    this.http.post(updateURL, body).subscribe(data => {
      console.log(data);
    });
  }

  getNotification() {
    const getNotificationURL = this.config.getURL() + 'notification/getNotifications';
    return this.http.get(getNotificationURL);
  }
}
