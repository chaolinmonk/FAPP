import { Component } from '@angular/core';
import { NavController,MenuController  } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController,
     private menuCtrl: MenuController) {}

  goToDetails() {
    this.navCtrl.navigateForward('/fase2');
  }
  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }
}
