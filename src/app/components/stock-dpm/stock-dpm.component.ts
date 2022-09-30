import { ActivatedRoute } from '@angular/router';
import { MedicamentService } from './../../service/medicament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-dpm',
  templateUrl: './stock-dpm.component.html',
  styleUrls: ['./stock-dpm.component.css']
})
export class StockDpmComponent implements OnInit {
id:number;
medicaments:any;
  constructor(private medicamenService:MedicamentService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=+this.activatedRoute.snapshot.paramMap.get("id")
    this.medicamenService.displayAllMedicaments(this.id).subscribe((data)=>{
      this.medicaments=data
    })
  }

}
