import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private http: AuthService, private router: Router) {
  }
  userName: string = "";
  email: string = "";
  password: string = "";

  RegisterUser() {
    console.log("register Page");
    this.http.register({ username: this.userName, email: this.email, Password: this.password }).subscribe(
      (response: any) => {
        Swal.fire({
          title: "Registration",
          text: response.message,
          icon: "success"
        });
      }
    )
  }


}
