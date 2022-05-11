import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Stagiaire } from 'src/app/model/stagiaire';

@Injectable({
providedIn: 'root'
})
export class StagiaireService {
private stagiaireUrl = 'http://localhost:3000/api/stagiaires';
//Les options de l'entête des requêtes HTTP
private httpOptions = {
'headers': new HttpHeaders({ 'Content-Type': 'application/json' })
}

constructor(private http: HttpClient) { }

/**
* Retourne un observable qui ajoutera la personne en base et produire l'objet personne correspondant (avec l'id qui lui aura été assigné)
*
* @param personne l'objet à ajouter (sauf l'id)
*/
ajouterStagiaire(stagiaire: Stagiaire): Observable<Stagiaire> {
return this.http.post<Stagiaire>(this.stagiaireUrl, stagiaire, this.httpOptions);
}
/**
* Retourne un observable qui produira un tableau contenant les personnes dans la base
* @returns la copie
*/
getStagiaires(): Observable<Stagiaire[]> {
return this.http.get<Stagiaire[]>(this.stagiaireUrl);
}

/**
* Supprime un stagiaire de la base
* @param p la personne à supprimer
*/
supprimerStagiaire(stagiaireASupprimer: Stagiaire) {
return this.http.delete<Stagiaire>(this.stagiaireUrl + '/' + stagiaireASupprimer.id);
}

updateStag(stagiaireAModifier: Stagiaire): Observable<Stagiaire> {
return this.http.post<Stagiaire>(this.stagiaireUrl + '/' + stagiaireAModifier.id + '/replace', stagiaireAModifier, this.httpOptions);
}


}
