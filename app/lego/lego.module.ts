import {HttpModule} from '@angular/http';
import { LegoSetsComponent } from './lego-sets/legoSets.component';
import { LegoSetDetailsComponent } from './lego-set-details/legoSetDetails.component';
import { LegoSetService } from './legoSet.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, HttpModule],
    declarations: [LegoSetsComponent, LegoSetDetailsComponent],
    exports: [],
    providers: [LegoSetService]
})
export class LegoModule {
}
