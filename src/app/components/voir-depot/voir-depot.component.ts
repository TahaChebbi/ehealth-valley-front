import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voir-depot',
  templateUrl: './voir-depot.component.html',
  styleUrls: ['./voir-depot.component.css']
})
export class VoirDepotComponent implements OnInit {
  id:number;
  conteur:number=0;
 
medicaments=[
  {depotId:1,id:1,codepct:3041,nom:"panadol 500mg",prix:"5,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"100"},
  {depotId:1,id:2,codepct:2041,nom:"doliprane",prix:"4,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"200"},
  {depotId:1,id:3,codepct:4041,nom:"clamoxile",prix:"3,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"300"},
  {depotId:1,id:4,codepct:5041,nom:"acarbose",prix:"1,000",tarif:"4,500",categorie:"I",dci:"PARAZYT",quantite:"100"},
  {depotId:1,id:5,codepct:1041,nom:"smecta",prix:"5,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"500"},
  {depotId:1,id:6,codepct:4821,nom:"aciryl",prix:"5,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"600"},
  {depotId:1,id:7,codepct:2456,nom:"acuitel",prix:"5,500",tarif:"4,500",categorie:"C",dci:"ACICLOVIR",quantite:"800"},
  {depotId:1,id:8,codepct:6548,nom:"adex",prix:"5,000",tarif:"4,500",categorie:"E",dci:"BOMBARDE",quantite:"150"},
  {depotId:1,id:9,codepct:1475,nom:"adol",prix:"5,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"250"},
  {depotId:1,id:10,codepct:9832,nom:"panadol 150mg",prix:"5,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"90"},
  {depotId:1,id:11,codepct:4216,nom:"adybrex",prix:"5,000",tarif:"4,500",categorie:"E",dci:"ACICLOVIR",quantite:"50"},
]
reclamations=[
  {nomPharmacie:"shourouk",region:"mahdia",nomMedicament:"panadol",quantiteDemande:"100"},
  {nomPharmacie:"mannou",region:"sfax",nomMedicament:"doliprane",quantiteDemande:"200"},
  {nomPharmacie:"anas",region:"sousse",nomMedicament:"clamoxile",quantiteDemande:"50"},
  {nomPharmacie:"taha",region:"gabes",nomMedicament:"adex",quantiteDemande:"150"},
  {nomPharmacie:"islem",region:"djerba",nomMedicament:"adol",quantiteDemande:"300"},
  {nomPharmacie:"moez",region:"selyena",nomMedicament:"adybrex",quantiteDemande:"250"},
  {nomPharmacie:"fathi",region:"tabarka",nomMedicament:"smecta",quantiteDemande:"100"},
]
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this.id=+this.activatedroute.snapshot.paramMap.get("id")
    if (this.medicaments[0].depotId==this.id) {
      this.conteur=1
    }
    
  }
  reclamation(){
    console.log("done");
    
  }
}
