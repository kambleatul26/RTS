import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.page.html',
  styleUrls: ['./trains.page.scss'],
})
export class TrainsPage implements OnInit {

  bookings;

  constructor(
    private data: DataService,
    private router: Router
  ) {
    this.data.getBookingsPASS()
      .subscribe(res => {
        console.log(res);
        this.bookings = res;
      }, err => {
        console.log(err);
      });
  }

  details(booking) {
    console.log(booking);
    this.router.navigate(['passenger-dashboard/train-details'], {
      queryParams: {
        id: booking._id
      }
    })
  }

  transfer(booking) {
    this.router.navigate(['passenger-dashboard/transfer-ownership'], {
      queryParams: {
        id: booking._id
      }
    })
  }

  ngOnInit() {
  }

}
