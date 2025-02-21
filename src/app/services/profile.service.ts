import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../models/candidato.models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // Base URL per le richieste relative ai candidati
  private baseUrl: string = 'http://localhost:8080/api/candidati';

  constructor(private http: HttpClient) { }

    getProfile(userId: number): Observable<Candidato> {
      return this.http.get<Candidato>(`${this.baseUrl}/users/byId/${userId}`);
    }


  getCandidateIdByEmail(email: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/users/byEmail/${email}`);
  }


}
