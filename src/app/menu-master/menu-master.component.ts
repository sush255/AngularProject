import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-menu-master',
  standalone: true,
  imports: [HeaderComponent,SideNavComponent],
  templateUrl: './menu-master.component.html',
  styleUrl: './menu-master.component.css'
})
export class MenuMasterComponent {

}
