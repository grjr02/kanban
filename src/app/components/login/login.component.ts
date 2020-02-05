import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { HttpClient} from '@angular/common/http';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //public logins:Login [];

  login:Login = {
    
    username:'',
    _password:''

  }

  constructor(private router:Router, private _posts:LoginserviceService, private _http:HttpClient) { }

  ngOnInit() {

  }

  getLoginInfo(form: NgForm){
    
    this._posts.getPosts(form.value.userId).subscribe(
      data => {
        if(data){

          this.login = data; 
          
          if(form.value.password == this.login._password){
            console.log("User Logged In");
            console.log(this.login);
            this.onSubmitUser(this.login.username);
            return;
          }else{
            console.log("Wrong password");

          }
        }else{
          console.log(data);
        }
      },
      error =>{
        console.log("Error: " + error);
      }
    );  
    
  }

  onSubmit() {
    this.router.navigateByUrl('/');
  }
  onSubmitUser(user:String) {
    this.router.navigate(['/main', user]);
  }

}
