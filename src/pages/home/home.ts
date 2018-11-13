import { CategoriasPage } from './../categorias/categorias';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  //iniciou a aplicação desabilitar o menu
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  //quando sair da pagina inicial carrega o menu novamente
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.navCtrl.setRoot("CategoriasPage")
  }

}
