import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FloatLabelModule, CommonModule, FormsModule, ButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private userService: UserService, private router: Router) {}

  login(event: Event) {
    event.preventDefault();
    this.userService.login(this.email, this.password).subscribe(
      (response: { message: string }) => {  // Il tipo di risposta è un oggetto con una proprietà message
        const userIdMatch = response.message.match(/\d+/);  // Estrai il numero dalla stringa
        if (userIdMatch) {
          const userId = parseInt(userIdMatch[0], 10);  // Converti in numero
          localStorage.setItem('userEmail', this.email);
          localStorage.setItem('userId', userId.toString());
          this.message = `Benvenuto! ID utente: ${userId}`;
          this.router.navigate(['/profile']);
        } else {
          console.error('ID utente non trovato nella risposta');
          this.message = "Errore nel recupero dell'ID utente.";
        }
      },
      error => {
        console.error('Login error:', error);
        this.message = "Credenziali errate!";
      }
    );
  }

}
