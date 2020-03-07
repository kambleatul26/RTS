import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // env = 'dev';
  env = 'prod';

  dev = 'http://e4819d74.ngrok.io/';
  prod = 'https://splacer-server.herokuapp.com/';

  constructor() { }

  getURL() {
    if(this.env == 'dev') {
      return this.dev;
    } else if (this.env == 'prod') {
      return this.prod;
    }
  }
}