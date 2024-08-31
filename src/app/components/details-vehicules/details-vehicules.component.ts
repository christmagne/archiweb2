import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculeService } from '../../services/vehicule.service';
import { IVehicules } from '../../models/vehicules.models';

@Component({
  selector: 'app-details-vehicules',
  standalone: true,
  imports: [],
  templateUrl: './details-vehicules.component.html',
  styleUrl: './details-vehicules.component.scss'
})
export class DetailsVehiculesComponent {
  vehicules?: IVehicules;
  marque: string | null;

  
  constructor(private router: ActivatedRoute, private vehicleService: VehiculeService){
    this.marque = this.router.snapshot.paramMap.get("marque");
  }

  ngOnInit(){
    this.vehicleService.liste_vehicules.filter( veh => {
      if (veh.marque == this.marque) {
        this.vehicules = veh
      }
    })
  }

}
