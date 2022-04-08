import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../Models/livres-model';
import { LivresService } from '../Services/livres.services';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  @Input()
  livres!:Livre[];
  livreDispo!:any;

  constructor(private livre :LivresService) { }

  ngOnInit(): void {
    this.livres=this.livre.getAllLivres();
   
  }
  all(){
    this.livres=this.livre.getAllLivres();
  }
  getDispo(){
    this.livres=this.livre.getDisponible();
    console.log(this.livreDispo);
  }
setDispo(){
  for(let i=0;i<this.livres.length;i++){
    if(this.livres[i].disponible==true){
     console.log(this.livres[i]);
     this.livres[i].disponible=false;
    }
  }
}
setDispo2(){
  for(let i=0;i<this.livres.length;i++){
    if(this.livres[i].disponible==false){
     console.log(this.livres[i]);
     this.livres[i].disponible=true;
    }
  }
}

}
