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
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
  ) { }

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
    let lat;
    let long;
    this.geolocation.getCurrentPosition().then(resp => {
      lat = resp.coords.latitude;
      long = resp.coords.longitude;
    });
    const TRAIN_API_DATA = {
      trainId : this.trainId,
      station,
      lat,
      long,
    };

    this.alertTC(station);
  }


  async alertTC(station) {
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
              this.stations = this.stations.filter(s => s !== station);
            }
          }
        ]
      });

    await alert.present();
  }

}
