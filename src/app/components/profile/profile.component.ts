/* import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Candidato } from '../../models/candidato.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports:[CommonModule]
})
export class ProfileComponent implements OnInit {
  candidato!: Candidato;
  userId: string | null = localStorage.getItem('userId'); // Ottieni l'ID utente dal localStorage

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    if (this.userId) {
      this.loadProfile(Number(this.userId)); // Passa l'ID dell'utente come numero
    } else {
      console.error('Nessun ID utente trovato nel localStorage');
    }
  }

  loadProfile(userId: number): void {
    this.profileService.getProfile(userId).subscribe({
      next: (data: Candidato) => {
        this.candidato = data;
      },
      error: (error) => {
        console.error('Errore nel caricamento del profilo', error);
      }
    });
  }
}
 */
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CvService } from '../../services/cv.service'; // Importa il CVService
import { Candidato } from '../../models/candidato.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  candidato!: Candidato;
  userId: string | null = localStorage.getItem('userId');
  selectedFile!: File;

  constructor(private profileService: ProfileService, private cvService: CvService) {}

  ngOnInit(): void {
    if (this.userId) {
      this.loadProfile(Number(this.userId));
    } else {
      console.error('Nessun ID utente trovato nel localStorage');
    }
  }

  loadProfile(userId: number): void {
    this.profileService.getProfile(userId).subscribe({
      next: (data: Candidato) => {
        this.candidato = data;
      },
      error: (error) => {
        console.error('Errore nel caricamento del profilo', error);
      }
    });
  }

  // Metodo per selezionare il file
  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      console.log('File selezionato:', this.selectedFile.name);
    }
  }

  // Metodo per caricare il CV usando CvService
  uploadCV(): void {
    if (!this.selectedFile) {
      console.error('Nessun file selezionato!');
      return;
    }

    if (!this.userId) {
      console.error('ID utente non trovato!');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.cvService.uploadCV(Number(this.userId), formData).subscribe({
      next: (response) => {
        console.log('CV caricato con successo!', response);
      },
      error: (error) => {
        console.error('Errore nel caricamento del CV', error);
      }
    });
  }
}
