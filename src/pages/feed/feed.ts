import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MoovieProvider } from './../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[MoovieProvider]
})
export class FeedPage {

  public obj_feed = {
      titulo: "Nikolas Soares",
      data: "August 1 1984",
      descricao:"Estou criando um app incrivel com ionic",
      qtd_likes: 23,
      qtd_comments: 8,
      time_feed: "11h"
  }

  public nomeUser:string = "Nikolas Soares";

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movidProvider: MoovieProvider) {
  }

  ionViewDidLoad() {

    this.movidProvider.getLastedMovies().subscribe(
      data => {
        let response = (data as any);
        let obj_return = JSON.parse(response._body);

        this.lista_filmes = obj_return.results;

        console.log(obj_return);
      },
      error => {
        console.log(error);
      }
    );

    console.log('ionViewDidLoad FeedPage');
  }

}
