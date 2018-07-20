import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()

export class SwapiService {

  private inputString = new BehaviorSubject <string>('');
  currentString = this.inputString.asObservable();



  constructor(private http : Http) { }



  AddData(value:string){
    this.inputString.next(value);
  }

   //////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////     Users     //////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////



  /**
 * Summary .
 *
 * This Function Should return observable<users[]>
 *
 */
  GetAllUsers(){
    let headers= new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(API_URL +'people',  options)
  }

  GetUserByName(name){
    let headers= new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(API_URL +'people/?search='+ name,  options).map(res => {
      return res.json().results;
    });

  }

  GetHomeWorld(url){
    let headers= new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url,  options).map(res =>{
      return res.json();
    })
  }


}
