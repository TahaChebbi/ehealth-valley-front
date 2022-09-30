import { MedicamentService } from './../../service/medicament.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface-pharmacie-centrale',
  templateUrl: './interface-pharmacie-centrale.component.html',
  styleUrls: ['./interface-pharmacie-centrale.component.css']
})
export class InterfacePharmacieCentraleComponent implements OnInit {
  objectDepot={}
  objectPharmacie:any;
  medicaments:any;
  depots=[
    {id:1,nomDepot:"taha",region:"mahdia",quantite:"500 médicaments"},
    {id:2,nomDepot:"Mannou",region:"tataouine",quantite:"200 médicaments"},
    {id:3,nomDepot:"anas",region:"sfax",quantite:"600 médicaments"},
    {id:4,nomDepot:"shourouk",region:"monastir",quantite:"400 médicaments"},
    {id:5,nomDepot:"chaker",region:"djerba",quantite:"100 médicaments"},
  ]
  pharms:any;
  gross:any;
  constructor(private route:Router,private medicamentService:MedicamentService) { }

  ngOnInit() {
    this.objectPharmacie = JSON.parse(localStorage.getItem("ConnectedUser"));
    this.medicamentService.displayMedicamentByPharmacie(this.objectPharmacie.idPharmacieCentrale).subscribe((data)=>{
    this.medicaments=data  
   
    
    })
    this.medicamentService.displayAllPharmacie().subscribe((data)=>{
      this.pharms=data  
      })
      this.medicamentService.displayAllGrossiste().subscribe((data)=>{
        this.gross=data
      })
  }
  

}
