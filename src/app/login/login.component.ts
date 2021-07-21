import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any;
  constructor(private authService:AuthenticationService,
              private router:Router,private http:HttpClient) { }

  ngOnInit() {
 }
 private users=[
    {username:"admin", password:"1234",roles:['USER','ADMIN']},
    {username:"user1", password:"1234",roles:['USER']},
    {username:"user2", password:"1234",roles:['USER']}
  ]

 onLogin(user:any){
     this.authService.login(user.username,user.password);
     if(this.authService.isAuthenticated()){
       this.router.navigateByUrl('');
     }

  }

}
