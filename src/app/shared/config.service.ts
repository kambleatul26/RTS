import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // env = 'dev';
  env = 'prod';

  dev = 'http://7589deef.ngrok.io/';
  prod = 'https://manassinkar-64at.localhost.run/';

  constructor() { }

  getURL() {
    if(this.env == 'dev') {
      return this.dev;
    } else if (this.env == 'prod') {
      return this.prod;
    }
  }
}