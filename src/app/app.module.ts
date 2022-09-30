import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupMedecinComponent } from './components/signup-medecin/signup-medecin.component';
import { LoginComponent } from './components/login/login.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpDepotComponent } from './components/sign-up-depot/sign-up-depot.component';
import { InterfacePharmacieCentraleComponent } from './components/interface-pharmacie-centrale/interface-pharmacie-centrale.component';
import { VoirDepotComponent } from './components/voir-depot/voir-depot.component';
import { FiltreMedicamentPipe } from './filtres/filtre-medicament.pipe';
import { InterfaceDepotComponent } from './components/interface-depot/interface-depot.component';
import { RecalamationPharmacieToDepotComponent } from './components/recalamation-pharmacie-to-depot/recalamation-pharmacie-to-depot.component';
import { ReclamationDepotComponent } from './components/reclamation-depot/reclamation-depot.component';
import { InterfacePharmacieComponent } from './components/interface-pharmacie/interface-pharmacie.component';
import { ReclamationPahrmacieHistoriqueComponent } from './components/reclamation-pahrmacie-historique/reclamation-pahrmacie-historique.component';
import { DpmComponent } from './components/dpm/dpm.component';
import { StockDpmComponent } from './components/stock-dpm/stock-dpm.component';
import { StockDpmPharmacieComponent } from './components/stock-dpm-pharmacie/stock-dpm-pharmacie.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ServicesComponent,
    ProductsComponent,
    HomeComponent,
    SignupComponent,
    SignupMedecinComponent,
    LoginComponent,
    SignUpDepotComponent,
    InterfacePharmacieCentraleComponent,
    VoirDepotComponent,
    FiltreMedicamentPipe,
    InterfaceDepotComponent,
    RecalamationPharmacieToDepotComponent,
    ReclamationDepotComponent,
    InterfacePharmacieComponent,
    ReclamationPahrmacieHistoriqueComponent,
    DpmComponent,
    StockDpmComponent,
    StockDpmPharmacieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
