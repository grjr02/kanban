import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { completedTasks } from '../models/completedTasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompletedtasksService {

  completedTasks:completedTasks
  private readonly _url = "http://localhost:8080" 

  constructor(private _http:HttpClient) { }

  getCompletedTasks():Observable<completedTasks>{

    return this._http.get<completedTasks>(this._url + "/completedtasks");
    
  }
}
