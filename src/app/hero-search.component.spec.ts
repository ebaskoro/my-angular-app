import { DebugElement } from '@angular/core';
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { HeroSearchService } from './hero-search.service';
import { HeroSearchComponent } from './hero-search.component';


describe('HeroSearchComponent', () => {

    let fixture: ComponentFixture<HeroSearchComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    HeroSearchComponent
                ],
                providers: [
                    {
                        provide: HeroSearchService,
                        use: {
                            search: () => {
                                return Observable.of([]);
                            }
                        }
                    }
                ]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HeroSearchComponent);
            })
            .catch(reason => {
                console.error(`Unable to compile components: ${reason}`);
            });
    }));

    it('should create the component', async(() => {
        const target = fixture.debugElement.componentInstance;

        expect(target).toBeDefined();
    }));

    it('should initialise correctly', () => {
        const target = fixture
            .debugElement
            .componentInstance as HeroSearchComponent;

        expect(target.heroes).toBeUndefined();
    });

});
