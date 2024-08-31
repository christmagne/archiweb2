import { Routes } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsEtudiantComponent } from './components/details-etudiant/details-etudiant.component';
import { ConstantPool } from '@angular/compiler';
import { VehiculesComponent } from './components/vehicules/vehicules.component';
import { TrajetsComponent } from './components/trajets/trajets.component';
import { DetailsVehiculesComponent } from './components/details-vehicules/details-vehicules.component';
import { DetailsTrajetsComponent } from './components/details-trajets/details-trajets.component';

export const routes: Routes = [
    {
        path:"etudiant",
        component:EtudiantComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:'etudiant/:matricule',
        component:DetailsEtudiantComponent
    },
    {
        path:"vehicules",
        component:VehiculesComponent
    },
    {
        path:"trajets",
        component:TrajetsComponent
    },
    {
        path:'vehicules/:marque',
        component:DetailsVehiculesComponent
    },
    {
        path:'trajets/:address_depart',
        component:DetailsTrajetsComponent
    }

];
