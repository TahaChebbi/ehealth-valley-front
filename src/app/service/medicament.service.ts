import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  medicamentURL :string;
  medicamentURL2:string
  medicamentURL3:string
  medicamentURL4:string
  medicamentURL5:string
  medicamentURL6:string
  medicamentURL7:string
  medicamentURL8:string
  medicamentURL9:string
  medicamentURL10:string
  medicamentURL11:string
  medicamentURL12:string
  constructor(private httpClient:HttpClient) { 
    this.medicamentURL="http://localhost:8089/SpringMVC/get-Medicament";
    this.medicamentURL2="http://localhost:8089/SpringMVC/ReclamationbyIdEntroo";
    this.medicamentURL3="http://localhost:8089/SpringMVC/addReclame";
    this.medicamentURL4="http://localhost:8089/SpringMVC/getallph";
    this.medicamentURL5="http://localhost:8089/SpringMVC/getMedicamenPht";
    this.medicamentURL6="http://localhost:8089/SpringMVC/addReclam";
    this.medicamentURL7="http://localhost:8089/SpringMVC/allgro";
    this.medicamentURL8="http://localhost:8089/SpringMVC/ReclamationbyIdPh";
    this.medicamentURL9="http://localhost:8089/SpringMVC/pharmacieByIdDepo";
    this.medicamentURL10="http://localhost:8089/SpringMVC/Reclamation";
    this.medicamentURL11="http://localhost:8089/SpringMVC/Reclamationaprv";
    this.medicamentURL12="http://localhost:8089/SpringMVC/Reclamationrj";
   ;

  }
  public approuved(id): Observable<any> {
    return this.httpClient.get(this.medicamentURL11+"/"+id);
  } 
  public rejeter(id): Observable<any> {
    return this.httpClient.get(this.medicamentURL12+"/"+id);
  }

  public displayAllMedicaments(id): Observable<any> {
    return this.httpClient.get(this.medicamentURL+"/"+id);
  }
  public displayAllReclamationGrossiste(id): Observable<any> {
    return this.httpClient.get(this.medicamentURL10+"/"+id);
  }
  public displayPharmacieByIdEntrepot(id): Observable<any> {
    return this.httpClient.get(this.medicamentURL9+"/"+id);
  }
  public displayAllPharmacie(): Observable<any> {
    return this.httpClient.get(this.medicamentURL4);
  }
  public displayAllGrossiste(): Observable<any> {
    return this.httpClient.get(this.medicamentURL7);
  }
  public displayMedicamentByPharmacie(id): Observable<any> {
    return this.httpClient.get(this.medicamentURL5+"/"+id);
  }
  public displayRecByIdPharm(id): Observable<any> {
    return this.httpClient.get(this.medicamentURL8+"/"+id);
  }
  public addReclamationGrossiste(id,obj:any) {
     this.httpClient.post<any>(this.medicamentURL3+"/"+id,obj).subscribe(response=>{
          
    });
  }
  public addReclamationPharmaGross(id,obj:any) {
    this.httpClient.post<any>(this.medicamentURL6+"/"+id,obj).subscribe(response=>{
         
   });
 }
  // deleteStudentById(id){
  //   return this.httpClient.delete<{message:any}>(`${this.studentURL}/${id}`)
  // }
}
