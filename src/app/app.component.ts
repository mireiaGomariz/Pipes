import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Mireia";

  array = [1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  a = 0.234;
}
