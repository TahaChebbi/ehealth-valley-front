import { MedicamentService } from './../../service/medicament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamation-depot',
  templateUrl: './reclamation-depot.component.html',
  styleUrls: ['./reclamation-depot.component.css']
})
export class ReclamationDepotComponent implements OnInit {
  reclamationGrossistes:any;
  objectReclamation:any;
  constructor(private medicamentService:MedicamentService) { }

  ngOnInit() {
    this.reclamationGrossistes = JSON.parse(localStorage.getItem("ConnectedUser"));
    this.medicamentService.displayAllReclamationGrossiste(this.reclamationGrossistes.idEntropot).subscribe((data)=>{
      this.objectReclamation=data
    })
    
  }

}
