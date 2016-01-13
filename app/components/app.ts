import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { HomeComponent }    from './home';
import { BeerComponent }    from './beer';
import { BreweryComponent } from './brewery';

@Component({
    selector: 'app',
    template: `
        <nav>
            <ul>
                <li><a [routerLink]="['/Home']">Home</a></li>
                <li><a [routerLink]="['/Beer']">Beers</a></li>
                <li><a [routerLink]="['/Brewery']">Breweries</a></li>
            </ul>
        </nav>

        <main>
            <router-outlet></router-outlet>
        </main>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home', component: HomeComponent, as: 'Home', useAsDefault: true },
    { path: '/beer', component: BeerComponent, as: 'Beer' },
    { path: '/brewery', component: BreweryComponent, as: 'Brewery' }
])
export class AppComponent { }