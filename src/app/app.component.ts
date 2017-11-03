import { Component } from '@angular/core';


/**
 * App component.
 *
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss'
    ]
})
export class AppComponent {

    /**
     * Gets the title.
     *
     * @returns {string} The title.
     */
    get title() {
        return 'Tour of Heroes';
    }

}
