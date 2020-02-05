import { Injectable } from '@angular/core';
import { ToDo } from '../models/toDo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDo:ToDo;
  private readonly _url: string = 'http://localhost:8080';

  constructor(private _http:HttpClient) { }

  getAllTodos():Observable<ToDo>{

    return this._http.get<ToDo>(this._url + "/todo");


  }
}
