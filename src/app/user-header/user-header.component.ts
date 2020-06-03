import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent implements OnInit {
  private userName : string;
  private greeting : string;
  private photoUrl : string;

  constructor() { 
    this.userName = 'Chu Ying, Rebecca';
    this.greeting = '';
    this.photoUrl = 'https://picsum.photos/70';
  }

  ngOnInit() {
    this.greeting = this.getGreeting();
  }

  getGreeting = () : string => {
    let greeting : string = "";
    let day = new Date();
    let timeOfDay : number = day.getHours();

    if(timeOfDay >= 0 && timeOfDay < 12){
      greeting = "Good Morning";
    }else if(timeOfDay >= 12 && timeOfDay < 16){
      greeting = "Good Afternoon";
    }else if(timeOfDay >= 16 && timeOfDay < 24){
      greeting = "Good Evening";
    }
    return greeting;
  };

}
