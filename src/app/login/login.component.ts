import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' 
})

export class LoginComponent {
  username: string = "";
  Password: string = "";
  rememberMe: boolean = false;
 
  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(){
    this.loadRememberedCredential();
  }

  onLogin(form: any) {
    console.log("in admin");

    //console.log(this.username);
    if(form.valid){
    this.authService.login({username:this.username,Password:this.Password}).subscribe(
      (response:any)=>{
        if(this.rememberMe){
          localStorage.setItem('rememberedEmail',this.username)
          localStorage.setItem('rememberedPassword',this.Password)
          localStorage.setItem('rememberMe','true');
        }
        else{
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
          localStorage.removeItem('rememberMe');
        }
        if(response.token!=null)
        {
        this.authService.setToken(response.token);
        this.router.navigate(['/dashboard']);
        }
        else{
          alert('Invalid Credentials!');
        } 
      },
      (error) => {
        alert('Invalid Credentials!');
      }
    )
  }else{
    console.log("form invalid")
  }
    
  }
  private loadRememberedCredential(){
    const rememberedEmail=localStorage.getItem('rememberedEmail')
    const rememberedPassword = localStorage.getItem('rememberedPassword')
    const rememberMeFlag=localStorage.getItem('rememberMe')==='true';
    if(rememberMeFlag && rememberedEmail && rememberedPassword){
      this.username=rememberedEmail;
      this.Password=rememberedPassword;
      this.rememberMe=true;
    }
  }
}
