import { Component, Input, OnInit } from '@angular/core';
import { Login } from '../Models/livres-model';
import { LivresService } from '../Services/livres.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private login:LivresService) { }
  
  affichage!:string;
  @Input()
  logins!:Login
  storage!:any;
  value!:any;
  ngOnInit(): void {
   
   
  this.storage=this.login.getStorage("admin"||"user");
  this.storage = this.storage.username;
  }
 
  
  
  disconnect() :any{
    console.log(this.storage)
   if(this.storage==="admin" || this.storage==="user"){
     this.login.disconnect("admin");
     this.login.disconnect("user");
    this.value = this.storage=null;
   
   }
   else{
     throw new Error("Vous n'êtes pas connecté");
   }
  }
 

}
