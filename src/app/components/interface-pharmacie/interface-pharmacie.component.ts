import { MedicamentService } from './../../service/medicament.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-pharmacie',
  templateUrl: './interface-pharmacie.component.html',
  styleUrls: ['./interface-pharmacie.component.css']
})
export class InterfacePharmacieComponent implements OnInit {
  medicaments:any;
  objectPharmacie:any;
  objectReclamation={
  nomMedicament:"",
  codePct:"",
  quantite:"",
  reponse:null,
  idGrossiste:null,
}
  object:any;
  constructor(private route:Router,private medicamentService:MedicamentService) { }
  
  ngOnInit() {
      this.objectPharmacie = JSON.parse(localStorage.getItem("ConnectedUser"));
    this.medicamentService.displayMedicamentByPharmacie(this.objectPharmacie.idPharmacie).subscribe((data)=>{
      this.medicaments=data
     
      
    })
   
  }
  reclamationFonction(){
    this.object = {
      code_pct: this.objectReclamation.codePct,
      nommed: this.objectReclamation.nomMedicament,
      qte: this.objectReclamation.quantite,
      entropotid: this.objectReclamation.idGrossiste,
      reponse: ""
    }
    this.medicamentService.addReclamationPharmaGross(this.objectPharmacie.idPharmacie,this.object);
  }
  voirRecPharmacie(){
    this.route.navigate(["reclamationPharmacieHistorique"])
  }

}
