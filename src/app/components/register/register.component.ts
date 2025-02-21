import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: `./register.component.html`,
  styleUrl: `./register.component.scss`
})
export class RegisterComponent {
  user: User = { username:'', email:'', password:'' };
  message = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}


  register() {
    this.userService.register(this.user).subscribe({
      next: (response) => {
        this.message = 'Registrazione effettuata con successo!'
        // Handle successful registration
        this.router.navigate(['/login']); // Redirect to profile
      },
      error: (error) => {
        // Handle error
        this.message = 'Registration failed. Please try again.';
      }
    });
  }
}
