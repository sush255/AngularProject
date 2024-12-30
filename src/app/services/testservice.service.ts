import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private _http: HttpClient) { }

  public getDetails(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return this._http.get<any>(url);
}
verifyLogin(){
  const url=''
}
}
