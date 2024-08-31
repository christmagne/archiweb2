import { Component } from '@angular/core';
import { IEtudiant } from '../../models/etudiant.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})
export class EtudiantComponent {

  nom:string = "Magne Dassi";
  prenom:string = "Christ Laure";
  filiere:string = "isi";
  age:number = 22;
  date_naissance: string ="12/05/2002";
  ues:string[]=["analyse","ro","architecture","devellopement"];
  liste_etudiants:IEtudiant[]=
  [
    {matricule:"2122i902", nom:"magne", prenom:"laure",age:22},
    {matricule:"2022i901", nom:"dassi", prenom:"christ",age:13},
    {matricule:"2412i879", nom:"majoumo", prenom:"dora",age:27}
  ]

}
