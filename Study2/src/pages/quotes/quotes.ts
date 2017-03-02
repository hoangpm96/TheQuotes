import {Component, OnInit} from '@angular/core';
import {NavParams, AlertController} from  'ionic-angular'
import { Quote } from "../../data/quote.interface"
import {QuotesService} from "../../sevices/quotes";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string}[];
  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private  quotesService: QuotesService
              ){}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(addQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      buttons: [{
        text: 'Yes',
        handler: () =>{
            this.quotesService.addQuoteToFavorites(addQuote);
        }
      },
        {
          text: 'No',
          handler: () =>{
            console.log('No');
          }
        }]
    });
    alert.present();
  }
}
