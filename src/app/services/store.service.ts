import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StoreService {

    subject$ = {};

    create(namespace) {
        if(!this.subject$.hasOwnProperty(namespace)) {
            console.log(namespace)
            this.subject$[namespace] = new BehaviorSubject<Object>({});
        }else{
            console.log('Store: Namespace already exists');
        }
    }

    destroy(namespace) {
        delete this.subject$[namespace];
    }

    getCurrentValue(namespace) {
        return this.subject$[namespace].getValue();
    }

    stream(namespace): Observable<any> {
        if(this.subject$[namespace]){
            return this.subject$[namespace].asObservable();
        }else{
            console.log('Namespace ', namespace, ' not found')
        }
    }

    add(namespace, payload) {
        this.subject$[namespace].next(payload);
    }

}