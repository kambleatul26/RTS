import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.page.html',
  styleUrls: ['./indicator.page.scss'],
})
export class IndicatorPage implements OnInit {

  status = 'NONE';

  constructor() { }

  ngOnInit() {
  }

}
