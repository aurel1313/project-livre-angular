import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivresService } from '../Services/livres.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  log!:string
  constructor(private logins: LivresService, private route:Router) { }

  ngOnInit(): void {
    
  this.log="connexion";
  }
  

}
