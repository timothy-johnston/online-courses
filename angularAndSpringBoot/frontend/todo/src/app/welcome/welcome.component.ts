import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //ActivatedRoute
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  message = 'some welcome message great job'
  welcomeMessageFromService:string
  name = ''

  ngOnInit() {
    console.log(this.message)
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),   //Arrow function. For asynch calls.
      //response => console.log(response.message)                //Arrow function. For asynch calls.
    
      //Error handling:
      error => this.handleErrorResponse(error)
    
      );

    console.log('last line of getWelcomeMessage')

  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),   //Arrow function. For asynch calls.
      //response => console.log(response.message)                //Arrow function. For asynch calls.
    
      //Error handling:
      error => this.handleErrorResponse(error)
    
      );

    console.log('last line of getWelcomeMessage')

  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message
  }

}
