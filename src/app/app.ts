import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  menu = [
    {
      path:'',
      name:'Home'
    },
    {
      path:'register',
      name:'Register'
    },
  ]
}
