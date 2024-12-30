import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestserviceService } from './services/testservice.service';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test';
}
