import { AuthService } from 'src/app/shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.page.html',
  styleUrls: ['./train-details.page.scss'],
})
export class TrainDetailsPage implements OnInit {

  defaultTitle = 'Train No.'
  user;

  id;
  booking;
  checked;
  limit = 1;
  occupied = false;

  loc;

  constructor(
    private geoLocation: Geolocation,
    private auth: AuthService,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.user = this.auth.isAuthenticated();
    console.log(this.user);

    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log(params);
      this.id = params.get("id");
      console.log(this.id);

      this.data.getPNRDetails(this.id)
        .subscribe(res => {
          console.log(res);
          this.booking = res['booking'];
          this.checked = res['booking']['seats'];
          let occArray = res['occupiedList'];

          for(let i = 0;i < this.checked.length;i++) {
            if(occArray[i] == true) {
              this.checked[i].checked = true;
              this.occupied = true;
            }
          }
          console.log(this.occupied);
        });
    });

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

  reset() {
  }

  check() {
  } 

  submit() {
    let array = this.checked.filter(a => {
      return a.checked == true;
    });

    console.log(array);

    this.data.occupySeat(this.id, array, this.loc)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['passenger-dashboard/menu/trains']);
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
  }

}
