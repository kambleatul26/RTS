import { DataService } from 'src/app/shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.page.html',
  styleUrls: ['./train-details.page.scss'],
})
export class TrainDetailsPage implements OnInit {

  constructor(
    private geoLocation: Geolocation,
    private data: DataService
  ) {
    this.geoLocation.getCurrentPosition().then(resp => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
      this.data.presentAlert('Location', resp.coords.latitude + ', ' + resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ngOnInit() {
  }

}
