import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(user:User): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password }; // 🔥 Crea un oggetto JSON con email e password
    return this.http.post<any>(`${this.apiUrl}/login`, loginData, {
      headers: { 'Content-Type': 'application/json' } // ✅ Assicura che il backend lo riconosca come JSON
    });
  }

}
