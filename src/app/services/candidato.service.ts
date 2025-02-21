import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private apiUrl = 'http://localhost:8080/api/candidati';  // Cambia con il tuo URL

  constructor(private http: HttpClient) {}

  getCandidati(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }

  getCandidatoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCandidato(candidato: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, candidato);
  }

  updateCandidato(id: number, candidato: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, candidato);
  }

  deleteCandidato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
