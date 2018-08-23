import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  
  constructor(private httpClient : HttpClient)
  {
  
  }

  //Setter and getter for userLoggedIn
   
  //Header definition
  private genHeadersForAll() : HttpHeaders
  {
    return new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*');
  }

  //Http calls
  authUser(url : string, data : string) : Observable<any>
  {
    
    return this.httpClient.post('http://localhost:54208/api/Account/Login', data, {
      headers : this.genHeadersForAll()
    });
  }
  addUser(data : string) : Observable<any>
  {
    let httpHeader = new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*');
    return this.httpClient.post('http://localhost:54208/api/Account/Register', data, {
      headers : httpHeader
    });
  }
}
