import { DataService } from 'src/app/shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.page.html',
  styleUrls: ['./trains.page.scss'],
})
export class TrainsPage implements OnInit {

  bookings;

  constructor(private data: DataService) {
    this.data.getBookingsPASS()
      .subscribe(res => {
        console.log(res);
        this.bookings = res;
      }, err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
