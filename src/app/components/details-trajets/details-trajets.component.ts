import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrajet } from '../../models/trajets.models';
import { TrajetService } from '../../services/trajet.service';

@Component({
  selector: 'app-details-trajets',
  standalone: true,
  imports: [],
  templateUrl: './details-trajets.component.html',
  styleUrl: './details-trajets.component.scss'
})
export class DetailsTrajetsComponent {
  trajets?:ITrajet;
  // distance: number = 0;
  address_depart: string |null;
  
  
  constructor(private router: ActivatedRoute, private trajetService: TrajetService){

    // this.distance = Number(this.router.snapshot.paramMap.get("distance"))
    this.address_depart = this.router.snapshot.paramMap.get("address_depart");
  
  }
  
  

  ngOnInit(){
    this.trajetService.liste_trajet.filter( traj => {
      if (traj.address_depart== this.address_depart) {
        this.trajets = traj
      }
    })
  }

  }


