import { FormsModule } from '@angular/forms';
import { LegoShopDetailsComponent } from './legoShopDetails.component';
import { LegoShopSetsComponent } from './legoShopSets.component';
import { RouterModule, Routes } from '@angular/router';
import { LegoShopService } from './legoShop.service';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'lego-shop',
        component: LegoShopSetsComponent
    },
    {
        path: 'lego-shop-details/:legoShopSetId',
        component: LegoShopDetailsComponent
    }
];

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
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [AppComponent, DashboardComponent, LegoShopSetsComponent, LegoShopDetailsComponent],
    bootstrap: [AppComponent],
    providers: [LegoShopService]
})
export class AppModule {
}
