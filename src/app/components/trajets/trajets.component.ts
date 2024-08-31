import { Component } from '@angular/core';
import { ITrajet } from '../../models/trajets.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trajets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trajets.component.html',
  styleUrl: './trajets.component.scss'
})
export class TrajetsComponent {

  liste_trajet:ITrajet[]=
  [
    {address_depart:"efoulan", address_arrive:"mendong", distance:5},
    {address_depart:"obobogo", address_arrive:"mecc", distance:10},
    {address_depart:"eyang", address_arrive:"tkc", distance:7},
    {address_depart:"village", address_arrive:"bonamoussadi", distance:8},
    {address_depart:"bonandjo", address_arrive:"mbankolo", distance:12},
    {address_depart:"bonaberi", address_arrive:"bastos", distance:37}
  ]


}
