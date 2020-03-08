import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-transfer-ownership',
  templateUrl: './transfer-ownership.page.html',
  styleUrls: ['./transfer-ownership.page.scss'],
})
export class TransferOwnershipPage implements OnInit {

  defaultTitle = 'Train No.'

  id;
  booking;
  co_passengers;
  selected;

  constructor(
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
          this.co_passengers = this.booking.seats.map(b => b.passenger);
          console.log(this.co_passengers);
        }, err => {
          console.log(err);
        });
    });
  }

  change() {
    this.data.transferOwnership(this.id, this.selected)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
  }

}
