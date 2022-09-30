import { Router } from '@angular/router';
import { MedicamentService } from './../../service/medicament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dpm',
  templateUrl: './dpm.component.html',
  styleUrls: ['./dpm.component.css']
})
export class DpmComponent implements OnInit {
  
  gross:any;
  pharms:any;
  constructor(private medicamentService:MedicamentService,private route:Router) { }

  ngOnInit() {
    this.medicamentService.displayAllGrossiste().subscribe((data)=>{
      this.gross=data
    })
    this.medicamentService.displayAllPharmacie().subscribe((data)=>{
      this.pharms=data  
      })
  }
  voirStock(id){
    this.route.navigate([`stockDpm/${id}`])
  }
  voirStockPharm(id){
    this.route.navigate([`stockDpmPharmacie/${id}`])
  }

}
