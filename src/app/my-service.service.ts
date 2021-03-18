import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor( private http: HttpClient ) {

  }

  getCapital() {

    return this.http.get("https://restcountries.eu/rest/v2/alpha/co");
  }
}
