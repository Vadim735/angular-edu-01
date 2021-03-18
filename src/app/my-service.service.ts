import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor( private http: HttpClient ) {

  }

  getCapital(): Observable<any> {

    return this.http.get<any>("https://restcountries.eu/rest/v2/alpha/co");
  }
}
