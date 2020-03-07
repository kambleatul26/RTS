import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  env = 'dev';
  // env = 'prod';

  // dev = 'http://8360707c.ngrok.io/';
  dev = 'http://manassinkar-64at.localhost.run';
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