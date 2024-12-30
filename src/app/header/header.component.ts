import { Component } from '@angular/core';
import { TestserviceService } from '../services/testservice.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

   name:string="";

  ngOnInit() {

    this._http.getDetails().subscribe((res:any)=>{
      this.name=res.id;
     
    })
    // Called after the constructor and called  after the first ngOnChanges() 
 }

 constructor(private _http: TestserviceService,private authService:AuthService,private router:Router) { }
openUser(){
  
}
logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}

editProfile() {
  console.log('Edit Profile clicked');
  this.router.navigate(['/profile/edit']);
}

changePassword() {
  console.log('Change Password clicked');
  this.router.navigate(['/profile/change-password']);
}
}
