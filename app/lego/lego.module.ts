import { LegoSetsComponent } from './lego-sets/legoSets.component';
import { LegoSetDetailsComponent } from './lego-set-details/legoSetDetails.component';
import { LegoSetService } from './legoSet.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LegoSetsComponent, LegoSetDetailsComponent],
    exports: [],
    providers: [LegoSetService]
})
export class LegoModule {
}
