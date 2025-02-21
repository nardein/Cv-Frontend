import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private baseUrl: string = 'http://localhost:8080/api/cv'; // Assicurati che sia l'URL corretto

  constructor(private http: HttpClient) {}

  uploadCV(userId: number, formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload/${userId}`, formData);
  }
}
