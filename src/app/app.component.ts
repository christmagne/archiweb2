import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { AboutComponent } from './components/about/about.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,EtudiantComponent,AboutComponent,MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myFirstAp';
}
