import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  cvDetails : any = {
    projects: [
      {name: 'Project One', description: 'this is project one'},
      {name: 'Project Two', description: 'this is project two'}
    ]
  }
}
