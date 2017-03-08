import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegoShopSet } from './LegoShopSet';
import { LegoShopService } from './legoShop.service';


@Component({
  template: require('./legoShopSets.component.html!text'),
  styles: [require('./legoShopSets.component.css!text')]
})
export class LegoShopSetsComponent implements OnInit {

  legoShopSets: LegoShopSet[];

  constructor(private legoShopService: LegoShopService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(val => {
      const searchPhrase: string = val['query'];
      this.searchBySearchPhrase(searchPhrase);
    });
  }

  searchBySearchPhrase(searchPhrase: string) {
    this.legoShopSets = this.legoShopService.getLegoSets(searchPhrase);
  }

  showDetails(legoShopSetId: number): void {
    this.router.navigate(['lego-shop-details', legoShopSetId]);
  }
}
