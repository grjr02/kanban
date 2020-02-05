import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/login/sign.component';
import { MainComponent } from './components/main/main.component';
import { LoggedInComponent } from './components/logged/logged-in/logged-in.component';


const routes: Routes = [
  { path: 'login',component: LoginComponent}, 
  { path: 'sign', component: SignComponent},
  { path: 'main/:username', component: LoggedInComponent},
  { path: 'main', component: MainComponent},
  { path: '', component: MainComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MainComponent, LoginComponent ]