import { DataService } from 'src/app/shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  noti;
  loc;

  constructor(
    private data: DataService,
    private geoLocation: Geolocation,
    private router: Router
  ) {
    this.data.getNotification()
      .subscribe(res => {
        console.log(res);
        this.noti = res;
      }, err => {
        console.log(err);
      })

    this.geoLocation.getCurrentPosition().then(resp => {
        // resp.coords.latitude
        // resp.coords.longitude
      console.log(resp);
      this.loc = resp;
      this.loc = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude
      }
        // this.data.presentAlert('Location', resp.coords.latitude + ', ' + resp.coords.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  accept() {
    this.data.occupySeat(this.noti.notifications[0].bookingID, this.noti.seats, this.loc)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['passenger-dashboard/menu/indicator']);
      }, err => {
        console.log(err);
      })
  }

  reject() {}

  ngOnInit() {
  }

}
