import { DebugElement } from '@angular/core';
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';

import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';


describe('HeroDetailComponent', () => {

    let fixture: ComponentFixture<HeroDetailComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    FormsModule,
                    RouterTestingModule
                ],
                declarations: [
                    HeroDetailComponent
                ],
                providers: [
                    {
                        provide: HeroService,
                        use: {
                            getHeroes: () => {
                                return Promise.resolve([]);
                            },
                            getHero: id => {
                                return Promise.resolve({});
                            }
                        }
                    }
                ]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HeroDetailComponent);
            })
            .catch(reason => {
                console.error(`Unable to compile components: ${reason}`);
            });
    }));

    it('should create the component', () => {
        const target = fixture.debugElement.componentInstance;

        expect(target).toBeDefined();
    });

    it('should initialise correctly', () => {
        const target = fixture
            .debugElement
            .componentInstance as HeroDetailComponent;
        const actual = target.hero;

        expect(actual).toBeUndefined();
    });

});
