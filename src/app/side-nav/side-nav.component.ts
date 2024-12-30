import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],

  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faCoffee = faCoffee;
}
