import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAP-- >';

  constructor(private router:Router){}

  gotoMap(pageName:string):void{
    alert("hello")
    this.router.navigate([`${pageName}`]);
  }
} 
