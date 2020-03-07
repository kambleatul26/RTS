import { filter } from 'rxjs/operators';
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

  id;
  booking;
  checked;
  flag = false;
  limit = 1;
  occupied = false;

  constructor(
    private geoLocation: Geolocation,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

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
              this.occupied = true;
              this.checked[i].checked = true;
            }
          }
          // occArray.forEach(c => {
          //   if(c == true) {
          //     this.occupied = true;
          //     c.checked = true;
          //   }
          // })
          
          if(this.occupied) {
              this.flag = true;
          } else {
            this.checked.forEach(c => {
              c.checked = false;
            });
          }
          console.log(this.checked);
        });
    });

    // this.geoLocation.getCurrentPosition().then(resp => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   console.log(resp);
    //   this.data.presentAlert('Location', resp.coords.latitude + ', ' + resp.coords.longitude);
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }

  reset() {
    this.checked.forEach(c => {
      c.checked = false;
    });
    this.check();
  }

  check() {
    let count = 0;
    this.checked.forEach(c => {
      if(c.checked == true) {
        count = count + 1;
      }
    });
    if(count >= 1) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  } 

  submit() {
    let array = this.checked.filter(a => {
      return a.checked == true;
    });

    console.log(array);

    this.data.occupySeat(this.id, array)
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
