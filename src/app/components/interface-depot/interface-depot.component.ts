import { MedicamentService } from './../../service/medicament.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-depot',
  templateUrl: './interface-depot.component.html',
  styleUrls: ['./interface-depot.component.css']
})
export class InterfaceDepotComponent implements OnInit {
  p:number=0;
  s:number=0;
  editMedicament:any;
  editMedicamentInput:any;
  
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
   
  ]
  pharmacies=[
    {id:1,nomPharmacie:"shourouk",region:"mahdia",adresse:"bardo",quantite:"100"},
    {id:2,nomPharmacie:"mannou",region:"sfax",adresse:"zahrouni",quantite:"200"},
    {id:3,nomPharmacie:"anas",region:"sousse",adresse:"borj cedria",quantite:"300"},
    {id:4,nomPharmacie:"taha",region:"gabes",adresse:"cité ghazela",quantite:"250"},
    {id:5,nomPharmacie:"islem",region:"djerba",adresse:"carthage",quantite:"50"},
    {id:6,nomPharmacie:"moez",region:"selyena",adresse:"kram",quantite:"400"},
    {id:7,nomPharmacie:"fathi",region:"tabarka",adresse:"cité nakhil",quantite:"110"},
  ]
  constructor(private route:Router,private medicamentService:MedicamentService,private activatedRoute:ActivatedRoute) { }
  grosiste:any;
  object:any;
  
  id:Number;
  objectReclamation={
    nomMedicament:"",
  codePct:"",
  quantite:"",
  reponse:null,
  idGrossiste:null}
  loginForm:FormGroup;
  reclamation=[];
  objectPharmacie:any;
  ngOnInit() {
    // this.grosiste = JSON.parse(localStorage.getItem("ConnectedUser"));
    this.id=+this.activatedRoute.snapshot.paramMap.get("id")

    this.medicamentService.displayAllMedicaments(this.id).subscribe((data)=>{
      this.medicaments=data
    })
    this.medicamentService.displayPharmacieByIdEntrepot(this.id).subscribe((data)=>{
      this.objectPharmacie=data
    })
  }
  voirStockPharmacie(id){
    this.p=1;
  }
  reclamationPharmacie(){
    this.route.navigate([`reclamationPhharmacieDepot/${this.id}`])
  }
  reclamationFonction(){
    // fonction ajout réclamation
    // this.medicamentService.addReclamationGrossiste(this.id,this.objectReclamation).subscribe()
    //   this.reclamation.push(this.objectReclamation)
    //     console.log("her recl",this.reclamation);
      this.object = {
        code_pct: this.objectReclamation.codePct,
        nommed: this.objectReclamation.nomMedicament,
        qte: this.objectReclamation.quantite,
        reponse: ""
      }
      this.medicamentService.addReclamationGrossiste(this.id,this.object);
    
    
  }

  voirRecStock(){
    this.route.navigate(["reclamationDepot"])
  }




}
