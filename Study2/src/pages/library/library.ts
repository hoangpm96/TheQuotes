import {Component, OnInit} from '@angular/core';
import { Quote } from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";

/*
  Generated class for the Library page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit{
  quotesPage = QuotesPage;
dataquotes: {category: string, quotes: Quote[], icon: string}[];

ngOnInit(){
  this.dataquotes = quotes;
}

}
