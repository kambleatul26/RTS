import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loc-list',
  templateUrl: './loc-list.page.html',
  styleUrls: ['./loc-list.page.scss'],
})
export class LocListPage implements OnInit {
  trainId;
  trainDet;
  stations;
  lat;
  long;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
  ) {
    this.geolocation.getCurrentPosition().then(resp => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
    });
  }

  ngOnInit() {

    this.dataService.presentLoading('Please Wait...');
    this.trainId = this.route.snapshot.queryParamMap.get('trainId');
    console.log(this.trainId);

    this.dataService.getTrainDetail(this.trainId).subscribe(data => {
      this.trainDet = data;
      this.stations = this.trainDet.stations;
      this.dataService.loading.dismiss();
    });
  }

  onLocationClick(station) {
    const TRAIN_API_DATA = {
      trainID: this.trainId,
      location: station,
      latitude: this.lat,
      longitude: this.long,
    };
    console.log(TRAIN_API_DATA);
    this.alertTC(station, TRAIN_API_DATA);
  }


  async alertTC(station, TRAIN_API_DATA) {
    const alert = await this.alertCtrl.create({
      header: 'Mark as Reached',
      message: 'Do You Want To Mark Location as reached?',
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
            this.dataService.updateLocation(TRAIN_API_DATA);
            this.stations = this.stations.filter(s => s !== station);
          }
        }
      ]
    });

    await alert.present();
  }

}
