import { DataService } from 'src/app/shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  noti;

  constructor(private data: DataService) {
    this.data.getNotification()
      .subscribe(res => {
        console.log(res);
        this.noti = res;
      }, err => {
        console.log(err);
      })
  }

  accept() {}

  reject() {}

  ngOnInit() {
  }

}
