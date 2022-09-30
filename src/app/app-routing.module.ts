import { StockDpmPharmacieComponent } from './components/stock-dpm-pharmacie/stock-dpm-pharmacie.component';
import { StockDpmComponent } from './components/stock-dpm/stock-dpm.component';
import { DpmComponent } from './components/dpm/dpm.component';
import { ReclamationPahrmacieHistoriqueComponent } from './components/reclamation-pahrmacie-historique/reclamation-pahrmacie-historique.component';
import { InterfacePharmacieComponent } from './components/interface-pharmacie/interface-pharmacie.component';
import { ReclamationDepotComponent } from './components/reclamation-depot/reclamation-depot.component';
import { LoginComponent } from './components/login/login.component';
import { RecalamationPharmacieToDepotComponent } from './components/recalamation-pharmacie-to-depot/recalamation-pharmacie-to-depot.component';
import { InterfaceDepotComponent } from './components/interface-depot/interface-depot.component';
import { VoirDepotComponent } from './components/voir-depot/voir-depot.component';
import { InterfacePharmacieCentraleComponent } from './components/interface-pharmacie-centrale/interface-pharmacie-centrale.component';
import { SignUpDepotComponent } from './components/sign-up-depot/sign-up-depot.component';
import { SignupMedecinComponent } from './components/signup-medecin/signup-medecin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"signUpMedecin",component:SignupMedecinComponent},
  {path:"signUpDepot",component:SignUpDepotComponent},
  {path:"interfacePharmacieCentrale/:id",component:InterfacePharmacieCentraleComponent},
  {path:"interfaceDpm",component:DpmComponent},
  {path:"interfacePharmacie/:id",component:InterfacePharmacieComponent},
  {path:"interfaceDepot/:id",component:InterfaceDepotComponent},
  {path:"stockDpm/:id",component:StockDpmComponent},
  {path:"stockDpmPharmacie/:id",component:StockDpmPharmacieComponent},
  {path:"reclamationPhharmacieDepot/:id",component:RecalamationPharmacieToDepotComponent},
  {path:"reclamationDepot",component:ReclamationDepotComponent},
  {path:"reclamationPharmacieHistorique",component:ReclamationPahrmacieHistoriqueComponent},
  {path:"voir-depot/:id",component:VoirDepotComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
