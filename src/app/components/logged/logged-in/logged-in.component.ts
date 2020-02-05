import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from '../../service/loginservice.service';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../../service/todo.service';
import { InprogressService } from '../../service/inprogress.service';
import { CompletedtasksService } from '../../service/completedtasks.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  public user;
  public todos:any = []
  public inProg:any = []
  public complete:any = []

  constructor(private route:ActivatedRoute,
              private router:Router, 
              private _posts:LoginserviceService, 
              private _todos:TodoService,
              private _inProgress:InprogressService,
              private _getCompletedtasks:CompletedtasksService) { }

  ngOnInit() {

    this.route.paramMap.subscribe( params => this.user = params.get('username'));
    this.getTodos();
    this.getInProgress();
    this.getCompletedTasks();
    
  }

  getTodos(){

    this._todos.getAllTodos().subscribe(
      data => {this.todos = data,
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
