import { MedicamentService } from './../../service/medicament.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user={
    email:null,
    password:""
  };
  userGrossiste=[
    {
      idEntropot:1,
      adresse: "Route Manzel Chaker",
      nom: "avenir pharma gros",
      phoneNumber: "92559750",
      region: "Sfax"
    },
    {
      idEntropot:2,
      adresse: "Avenue khalifa",
      nom: "avicenne",
      phoneNumber: "73369641",
      region: "Sousse"
    },
    {
      idEntropot:3,
      adresse: "charguia",
      nom: "b & a pharma",
      phoneNumber: "23643413",
      region: "Tunis"
    },
    {
      idEntropot:4,
      adresse: "zarzouna",
      nom: "Centra nord",
      phoneNumber: "72436213",
      region: "Bizerte"
    },
    { 
      idEntropot:5,
      adresse: "cite ennour tatouin",
      nom: "co ge pha sud succ",
      phoneNumber: "2135499",
      region: "mednin"
    }
  ]
  pharmacieCentrale={
    phone:22222222,
    password:"centrale123",
  }	
  pharmacieCentrale1={
    idPharmacieCentrale:1
  }
  loginDpm={
    email:"dpm@domain.com",
    password:"dpm123456",

  }

    constructor(private route:Router,private medicamentService:MedicamentService) { }

  ngOnInit() {
    
  }
  login(){
    for (let i = 0; i < this.userGrossiste.length; i++) {
      if (this.userGrossiste[i].phoneNumber==this.user.email) {
        localStorage.setItem("ConnectedUser",JSON.stringify(this.userGrossiste[i]) );
        this.route.navigate([`interfaceDepot/${this.userGrossiste[i].idEntropot}`]);
      }
      this.medicamentService.displayAllPharmacie().subscribe((data)=>{
        for (let i = 0; i < data.length; i++) {
          if (data[i].phoneNumber==this.user.email) {
            localStorage.setItem("ConnectedUser",JSON.stringify(data[i]) );
            this.route.navigate([`interfacePharmacie/${data[i].idPharmacie}`]);
          }
          
        }
      })
    }
    
    if (this.pharmacieCentrale.phone==this.user.email) {

      localStorage.setItem("ConnectedUser",JSON.stringify(this.pharmacieCentrale1) );
      this.route.navigate([`interfacePharmacieCentrale/${this.pharmacieCentrale1.idPharmacieCentrale}`]);
    }
   
    if (this.loginDpm.email==this.user.email) {
      this.route.navigate(["interfaceDpm"]);
    }
    
  }

}
