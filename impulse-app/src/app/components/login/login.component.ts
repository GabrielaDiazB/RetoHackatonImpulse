import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirestoreserviceService } from 'src/app/services/firestore/firestoreservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private authService: FirestoreserviceService) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['admin/list-books']);
  }
}
