import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs/';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private readonly _url: string = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  login:Login;

   savePosts(x:Login){
     //return this.httpClient.get<Post[]>(this._url + '/posts');
   }

   getPosts(x:string):Observable<Login>{

    return this.httpClient.get<Login>(this._url + '/logins' + '/' + x);
     
   }
}
