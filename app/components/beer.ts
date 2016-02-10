import { Component } from 'angular2/core';

import { BeerService } from '../services/beer';

@Component({
    selector: 'beer',
    template: `
        <h2>Beers</h2>
        <div *ngFor="#beer of beers">
            {{beer.id}} - {{beer.name}}
        </div>
    `,
    providers: [BeerService]
})
export class BeerComponent {

    beers: any;

    constructor(private _beerService: BeerService) {
        this.beers = this._beerService.getBeerList();
    }
}