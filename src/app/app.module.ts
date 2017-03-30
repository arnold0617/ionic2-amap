import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IssuesPage } from '../pages/issues/issues';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { SiteInfoPage} from '../pages/site-info/site-info';


@NgModule({
  declarations: [
    MyApp,
    IssuesPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddItemPage,
    ItemDetailPage,
    SiteInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IssuesPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddItemPage,
    ItemDetailPage,
    SiteInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
