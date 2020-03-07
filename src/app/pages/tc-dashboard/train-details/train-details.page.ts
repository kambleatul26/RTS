import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.page.html',
  styleUrls: ['./train-details.page.scss'],
})
export class TrainDetailsPage implements OnInit {
  is = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 20; i++) {
      this.is.push(i);
    }
  }
}
