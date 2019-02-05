import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Username'
  password = ''
  testString = "ayyyyyy"
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router - Use dependency injection

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.testString);


    //Hardcode some authentication logic. This will be changed.
    if(this.username === 'tj' && this.password === '123') {
      
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }


  }

}
