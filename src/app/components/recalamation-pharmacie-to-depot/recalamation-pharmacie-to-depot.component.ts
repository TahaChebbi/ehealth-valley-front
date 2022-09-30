import { MedicamentService } from './../../service/medicament.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recalamation-pharmacie-to-depot',
  templateUrl: './recalamation-pharmacie-to-depot.component.html',
  styleUrls: ['./recalamation-pharmacie-to-depot.component.css']
})
export class RecalamationPharmacieToDepotComponent implements OnInit {
  id:number;
  reclamations:any;
  connected:any;
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private medicamentService:MedicamentService) { }

  ngOnInit() {
   
    this.id=+this.activatedRoute.snapshot.paramMap.get("id")
    this.medicamentService.displayAllReclamationGrossiste(this.id).subscribe((data)=>{
      this.reclamations=data
      
      
    })
  }
  approuver(id){
    this.medicamentService.approuved(id).subscribe()
  }
  rejeter(id){
    this.medicamentService.rejeter(id).subscribe()
  }
  goToStock(){
    this.route.navigate(["interfaceDepot/"+this.connected.idEntropot])
  }
}
