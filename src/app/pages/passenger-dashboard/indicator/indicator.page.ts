import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.page.html',
  styleUrls: ['./indicator.page.scss'],
})
export class IndicatorPage implements OnInit {

  status = 'NONE';
  user;
  constructor(
    private authService: AuthService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.presentLoading('Please Wait');
    this.authService.getUser().subscribe(data => {
      this.user = data;
      console.log(this.user);
      this.status = this.user.status;
      this.dataService.loading.dismiss();
    }, err => {
      this.dataService.loading.dismiss();
    });
  }

}
