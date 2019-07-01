import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('data/portfolio.json').pipe(
        map(
            response => response
        )
    );
  }
}
