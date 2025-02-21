import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoService } from '../../services/candidato.service';

@Component({
  selector: 'app-candidati',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Lista Candidati</h1>
    <ul>
  <li *ngFor="let candidato of candidati">
    <strong>Nome:</strong> {{ candidato.nome }} <br>
    <strong>Email:</strong> {{ candidato.email }} <br>
    <strong>Telefono:</strong> {{ candidato.telefono }} <br>
    <strong>Esperienza:</strong> {{ candidato.esperienza }} anni<br>
    <strong>Competenze:</strong> {{ candidato.competenze }} <br>
    <strong>Istruzione:</strong> {{ candidato.istruzione }} <br>
    <strong>CV:</strong>
    <span *ngIf="candidato.cvList.length > 0; else noCv">
      {{ candidato.cvList }}
    </span>
    <ng-template #noCv>Nessun CV caricato</ng-template>
    <hr>
  </li>
    </ul>
  `,
})
export class CandidatiComponent implements OnInit {
  candidati: any[] = [];

  constructor(private candidatoService: CandidatoService) {}

  ngOnInit() {
    this.candidatoService.getCandidati().subscribe((data) => {
      this.candidati = data;
    });
  }
}
