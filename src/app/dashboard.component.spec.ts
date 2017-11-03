import { DebugElement } from '@angular/core';
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {

    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    DashboardComponent
                ],
                providers: [
                    {
                        provide: HeroService,
                        use: {
                            getHeroes: () => {
                                Promise.resolve([]);
                            }
                        }
                    }
                ]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DashboardComponent);
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
            .componentInstance as DashboardComponent;
        const actual = target.heroes;

        expect(actual).toBeDefined();
        expect(actual.length).toBe(0);
    }));

});
