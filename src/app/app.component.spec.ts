import { DebugElement } from '@angular/core';
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';


describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    AppComponent
                ],
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
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
        const target = fixture.debugElement.componentInstance;
        const actual = target.title;

        expect(actual).toEqual('Tour of Heroes');
    }));

    describe('when rendered', () => {

        let target: DebugElement;

        beforeEach(async(() => {
            fixture.detectChanges();

            target = fixture.debugElement;
        }));

        it('should render title in a h1 tag', async(() => {
            const actual = target
                .query(By.css('h1'))
                .nativeElement
                .textContent;

            expect(actual).toContain('Tour of Heroes');
        }));

        it('should render correct links', async(() => {
            const linkElements = target.queryAll(By.css('nav > a'));

            expect(linkElements.length).toBe(2);
            expect(linkElements[0].nativeElement.href).toContain('dashboard');
            expect(linkElements[0].nativeElement.textContent).toContain('Dashboard');
            expect(linkElements[1].nativeElement.href).toContain('heroes');
            expect(linkElements[1].nativeElement.textContent).toContain('Heroes');
        }));

    });

});
