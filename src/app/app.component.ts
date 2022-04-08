import { Component } from '@angular/core';
import { LivresService } from './Services/livres.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-livre';
  constructor(private logins:LivresService) { }
  ngOnInit(): void {
   
  }
  disconnect(){
   
   sessionStorage.clear();
  }
}
