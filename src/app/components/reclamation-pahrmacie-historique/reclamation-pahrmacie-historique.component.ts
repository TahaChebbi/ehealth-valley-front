import { MedicamentService } from './../../service/medicament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamation-pahrmacie-historique',
  templateUrl: './reclamation-pahrmacie-historique.component.html',
  styleUrls: ['./reclamation-pahrmacie-historique.component.css']
})
export class ReclamationPahrmacieHistoriqueComponent implements OnInit {

  constructor(private medicamentService:MedicamentService) { }
  objectRec:any;
  tablRec:any;
  ngOnInit() {
    this.objectRec = JSON.parse(localStorage.getItem("ConnectedUser"));
    this.medicamentService.displayRecByIdPharm(this.objectRec.idPharmacie).subscribe((data)=>{
        this.tablRec=data
    })
  }

}
