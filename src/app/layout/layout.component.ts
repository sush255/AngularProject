import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideNavComponent } from "../side-nav/side-nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
