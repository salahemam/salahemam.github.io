import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersonalWebApp';
  cvDetails : any = {
    projects: [
      {name: 'Project One', description: 'this is project one'},
      {name: 'Project Two', description: 'this is project two'}
    ]
  }
}
