import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distribution } from '../model/distribution'; 

@Injectable({
  providedIn: 'root'
})
export class DistributionService {
  private distributionUrl = 'http://localhost:3000/api/distributions';
  private httpOptions = {
    'headers': new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  distribution : Distribution [] = [];
  constructor(private http: HttpClient) { }
  
  //Méthode qui ajoute une personne dans la bdd
  
  ajouterDistribution(distribution : Distribution ): Observable<Distribution>{
    return this.http.post<Distribution>(this.distributionUrl, distribution, this.httpOptions); 
  }
  
  //Fonction qui récupère la liste des punitions
  getDistribution(): Observable<Distribution[]> {
    return this.http.get<Distribution[]>(this.distributionUrl);
  }

  supprimerdistribution(distributionASupprimer: Distribution) : Observable<Distribution[]> {
    return this.http.delete<Distribution[]>(this.distributionUrl + '/' + distributionASupprimer.id);
  }
}
