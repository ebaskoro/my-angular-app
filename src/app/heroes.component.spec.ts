import { DebugElement } from '@angular/core';
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';


describe('HeroesComponent', () => {

    let fixture: ComponentFixture<HeroesComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    HeroesComponent
                ],
                providers: [
                    {
                        provide: HeroService,
                        use: {
                            getHero: () => {
                                return Promise.resolve([]);
                            }
                        }
                    }
                ]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HeroesComponent);
            })
            .catch(reason => {
                console.error(`Unable to compile components: ${reason}`);
            });
    }));

    it('should create the component', async(() => {
        const target = fixture.debugElement.componentInstance;

        expect(target).toBeDefined();
    }));

    it('should initialise correctly', async(() => {
        const target = fixture
            .debugElement
            .componentInstance as HeroesComponent;

        expect(target.heroes).toBeDefined();
        expect(target.heroes.length).toBe(0);
        expect(target.selectedHero).toBeUndefined();
    }));

});
