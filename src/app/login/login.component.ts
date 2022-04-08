import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LivresService } from '../Services/livres.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private logins:LivresService) { }

  ngOnInit(): void {
  }
  
  login = new FormControl('');
  password = new FormControl('');

  connect(){
    let login = this.login.value;
    let password = this.password.value;
    
  
    if(this.logins.getConnectedUser(login,password)){
      this.logins.getStorage(login);
      console.log(this.logins.getConnectedUser(login,password));
      this.router.navigate(['reservation']);
    }
    else{
      alert("Login ou mot de passe incorrect");
    }
   
  }
  disconnect(){
   
    
  }

}
