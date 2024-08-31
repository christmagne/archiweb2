import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-etudiant',
  standalone: true,
  imports: [],
  templateUrl: './details-etudiant.component.html',
  styleUrl: './details-etudiant.component.scss'
})
export class DetailsEtudiantComponent {

  matricule: string | null;
  constructor(private router: ActivatedRoute){

    this.matricule = this.router.snapshot.paramMap.get("matricule");

  }
}
