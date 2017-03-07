import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, DashboardComponent],
  bootstrap: [AppComponent],
  // TODO: import and add LegoShopService 
  providers: []
})
export class AppModule {
}
