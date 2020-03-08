import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // env = 'dev';
  env = 'prod';

  dev = 'https://manassinkar-ulde.localhost.run/';
  //prod = 'https://manassinkar-ibpl.localhost.run/';
  prod = 'https://railway-server.herokuapp.com/';

  constructor() { }

  getURL() {
    if(this.env == 'dev') {
      return this.dev;
    } else if (this.env == 'prod') {
      return this.prod;
    }
  }
}


// NOTIFICATIONS AFTER BOOKING PASSENGER OCCUPIES SEAT

// DISPLAY OF DIFFERENT COLORS DEPENDING UPON THE STATUS (PARTLY DONE - see indicators page)