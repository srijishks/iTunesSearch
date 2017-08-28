import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Movie } from './movie';
import { Globals } from './globals';

@Injectable()
export class MovieService {
    constructor(private globals: Globals, private _http:Http) { }
    searchmovie(moviename: any): Observable<Movie> {

      this._http.post('./apiLog.php', moviename);

       let headers = new Headers({ 'Access-Control-Allow-Origin': '*' }); 
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
       /*  let options = new RequestOptions({ headers: headers }); // Create a request option*/
        return this._http.get(this.globals.API_SEARCH_URL+`?term=${moviename.split(' ').join('+')}`, { headers: headers }) // ...using post request
                           .map(this.extractData)
                         .catch(this.handleErrorObservable);


  }


private extractData(res: Response ) {
    let body = res.json();
    return body || { };
  }

private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
} 

}
