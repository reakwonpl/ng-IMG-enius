import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient,HttpHeaders} from  '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

//Pixbay api key/url
private APIkey:string = environment.PixBayAPIkey;
private APIurl:string = environment.PixBayAPIurl;



private query:string;
private Url: string = this.APIurl + this.APIkey + '&q=';
private pageCount: string ='&per_page=8';

  constructor(private _http: HttpClient) { }

  getImage(query)
  {
    // return this._http.get(this.Url + query).map( r=>r.json());
    return this._http.get(this.Url + query + this.pageCount);
  }
}
