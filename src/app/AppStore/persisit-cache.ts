import { Injectable } from '@angular/core';
import { IAppStore } from './app-store.interface';
import { Store } from '@ngrx/store';


@Injectable({
    providedIn: 'root'
})

/**
 * A persisting cache state in local storage.
*/
export class PersisitCache {
    constructor(private store: Store<{ AppStore: IAppStore }>) { }
    /**  
     * @implements {Subscription} storing the cached data in local storage.
     */
    traceState = () =>
        this.store.select('AppStore').subscribe(appStore =>
            localStorage.setItem('AppStore', JSON.stringify(appStore))
        )
}

/** 
 * @returns boolean determining whether there is any cached data available or not.  
 */

export const noCache = () => !localStorage.getItem('AppStore') ? true : false

/**
 * @returns retrieving data that has been previously stored in the local storage
*/
export const cache: IAppStore = JSON.parse(<string>localStorage.getItem('AppStore'))
