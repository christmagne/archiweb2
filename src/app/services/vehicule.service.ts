import { Injectable } from '@angular/core';
import { IVehicules } from '../models/vehicules.models';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  liste_vehicules:IVehicules[]=
  [
     {
         marque: "Toyota",
         modele: "Corolla",
         nombre_chevaux: 130,
         couleur: "Blanc",
         moteur: "Essence",
         nombre_portieres: 4,
         nombre_places: 5,
         automatique: true
     },
     {
         marque: "Ford",
         modele: "Mustang",
         nombre_chevaux: 450,
         couleur: "Rouge",
         moteur: "Essence",
         nombre_portieres: 2,
         nombre_places: 4,
         automatique: false
     },
     {
         marque: "Tesla",
         modele: "Model 3",
         nombre_chevaux: 283,
         couleur: "Noir",
         moteur: "Électrique",
         nombre_portieres: 4,
         nombre_places: 5,
         automatique: true
     },
     {
         marque: "Honda",
         modele: "Civic",
         nombre_chevaux: 158,
         couleur: "Bleu",
         moteur: "Essence",
         nombre_portieres: 4,
         nombre_places: 5,
         automatique: true
     },
     {
         marque: "BMW",
         modele: "X5",
         nombre_chevaux: 335,
         couleur: "Gris",
         moteur: "Diesel",
         nombre_portieres: 4,
         nombre_places: 5,
         automatique: true
     },
     {
         marque: "Audi",
         modele: "A4",
         nombre_chevaux: 261,
         couleur: "Argent",
         moteur: "Essence",
         nombre_portieres: 4,
         nombre_places: 5,
         automatique: true
     },
     {
         marque: "Volkswagen",
         modele: "Golf",
         nombre_chevaux: 200,
         couleur: "Vert",
         moteur: "Essence",
         nombre_portieres: 4,
         nombre_places: 5,
         automatique: false
     }
 ]

  constructor() { }
}
