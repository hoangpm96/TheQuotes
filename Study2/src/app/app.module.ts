import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {FavoritesPage} from "../pages/favorites/favorites";
import {QuotePage} from "../pages/quote/quote";
import {QuotesPage} from "../pages/quotes/quotes";
import {SettingPage} from "../pages/setting/setting";
import {LibraryPage} from "../pages/library/library";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavoritesPage,
    QuotePage,
    QuotesPage,
    SettingPage,
    LibraryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavoritesPage,
    QuotePage,
    QuotesPage,
    SettingPage,
    LibraryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
