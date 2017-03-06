import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  // TODO: import and add FormsModule from @angular/forms
  imports: [BrowserModule],
  // TODO: import and add DashboardComponent
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
