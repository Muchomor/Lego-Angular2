import { RouterModule } from '@angular/router';
import { LegoShopSetsComponent } from './lego-shop-sets/legoShopSets.component';
import { LegoShopDetailsComponent } from './lego-shop-details/legoShopDetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LegoShopSetsComponent, LegoShopDetailsComponent, DashboardComponent],
    exports: [],
    providers: []
})
export class LegoShopModule {
}
