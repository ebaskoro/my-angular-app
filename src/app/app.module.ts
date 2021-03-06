import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';


/**
 * App module.
 *
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        environment.production ? [] : InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroSearchComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService,
        HeroSearchService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
