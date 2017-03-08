import { LegoShopService } from './legoShop.service';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// TODO: create app paths (array of Routes type -> import Routes type from @angular/router)
// TODO: set DashboardComponent as default dialog
// TODO: create LegoShopDetailsComponent, create route for the dialog and load selected LegoShopSet on dialog startup
// TODO: create LegoShopSetsComponent, create route for the dialog and load all LegoShopSets on dialog startup
// TODO: move DashboardComponent, LegoShopDetailsComponent, LegoShopSetsComponent to the app/lego-shop directory
// TODO: create LegoShopModule in app/lego-shop directory
// TODO: move DashboardComponent, LegoShopDetailsComponent, LegoShopSetsComponent to the LegoShopModule
// TODO: import LegoShopModule into the AppModule
// TODO: create LegoModule in app/lego directory
// TODO: create LegoSetDetailsComponent in the app/lego directory (LegoModule), create route for the dialog
// TODO: create LegoSetsComponent in the app/lego directory (LegoModule), create route for the dialog
// TODO: import LegoModule into the AppModule
// TODO: create AppRoutingModule and move routes definition there, import AppRoutingModule in AppModule

@NgModule({
  // TODO: import RouterModule from @angular/router and call forRoot static method with app paths
  // TODO: import FormsModule from @angular/forms
  imports: [BrowserModule],
  declarations: [AppComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [LegoShopService]
})
export class AppModule {
}
