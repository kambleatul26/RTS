import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertCtl: AlertController
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.role;
    // // console.log('Expected Role => ' + expectedRole);

    return this.authService.user.pipe(
      take(1),
      map(user => {
        // // console.log('User => ' + user.uid);
        if (user) {
          const role = user.role;

          if (expectedRole === role) {
            return true;
          } else {
            this.showAlert();
            return this.router.parseUrl('/login');
          }
        } else {
          this.showAlert();
          return this.router.parseUrl('/login');
        }
      })
    );
  }

  async showAlert() {
    const alert = await this.alertCtl.create({
      header: 'Unauthorized',
      message: 'You are not authorized to visit this page',
      buttons: ['OK']
    });
    alert.present();
  }
}