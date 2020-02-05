import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inProgress } from '../models/inProgress.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InprogressService {

  inprogress:inProgress;
  private readonly _url: string = 'http://localhost:8080';


  constructor(private _http:HttpClient) { }


  getInProgress():Observable<inProgress>{

    return this._http.get<inProgress>(this._url + "/in");

  } 

}
