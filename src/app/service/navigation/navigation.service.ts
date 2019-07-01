import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(private http: HttpClient) { }

    getListMenu(): Observable<any> {
        return this.http.get('data/navigation.json').pipe(
            map(
                response => response
            )
        );
    }
}
