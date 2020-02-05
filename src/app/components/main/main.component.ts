import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service'
import { HttpClient } from '@angular/common/http'
import { ToDo } from '../models/toDo.model';
import { TodoService } from '../service/todo.service';
import { InprogressService } from '../service/inprogress.service';
import { CompletedtasksService } from '../service/completedtasks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public todos:any = []
  public inProg:any = []
  public complete:any = []

  constructor(private router:Router, 
              private _posts:LoginserviceService, 
              private _http:HttpClient,
              private _todos:TodoService,
              private _inProgress:InprogressService,
              private _getCompletedtasks:CompletedtasksService) { }

  ngOnInit() {

    this.getTodos();
    this.getInProgress();
    this.getCompletedTasks();

  }

  getTodos(){

    this._todos.getAllTodos().subscribe(
      data => { this.todos = data,
      console.log(this.todos.length)
      }
      
    );

  }

  getInProgress(){

    this._inProgress.getInProgress().subscribe(
      data => {
        this.inProg = data;
      }
    )

  }

  getCompletedTasks(){

    this._getCompletedtasks.getCompletedTasks().subscribe(
      data => {this.complete = data,
        console.log(data);
      }
    )

  }
}
