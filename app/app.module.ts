import { LegoModule } from './lego/lego.module';
import { LegoSetDetailsComponent } from './lego/lego-set-details/legoSetDetails.component';
import { LegoSetsComponent } from './lego/lego-sets/legoSets.component';
import { LegoShopModule } from './lego-shop/legoShop.module';
import { FormsModule } from '@angular/forms';
import { LegoShopDetailsComponent } from './lego-shop/lego-shop-details/legoShopDetails.component';
import { LegoShopSetsComponent } from './lego-shop/lego-shop-sets/legoShopSets.component';
import { RouterModule, Routes } from '@angular/router';
import { LegoShopService } from './shared/legoShop.service';
import { DashboardComponent } from './lego-shop/dashboard/dashboard.component';
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
        path: 'lego-sets',
        component: LegoSetsComponent
    },
    {
        path: 'lego-set-details',
        component: LegoSetDetailsComponent
    },
    {
        path: 'lego-set-details/:legoSetId',
        component: LegoSetDetailsComponent
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

// TODO: create AppRoutingModule and move routes definition there, import AppRoutingModule in AppModule

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, LegoShopModule, LegoModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [LegoShopService]
})
export class AppModule {
}
