import { MedicamentService } from './../../service/medicament.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-dpm-pharmacie',
  templateUrl: './stock-dpm-pharmacie.component.html',
  styleUrls: ['./stock-dpm-pharmacie.component.css']
})
export class StockDpmPharmacieComponent implements OnInit {
id:number;
medicaments:any;
  constructor(private activatedRoute:ActivatedRoute,private medicamentService:MedicamentService) { }

  ngOnInit() {
    this.id=+this.activatedRoute.snapshot.paramMap.get("id")
    this.medicamentService.displayAllMedicaments(this.id).subscribe((data)=>{
      this.medicaments=data
    })
  }

}
