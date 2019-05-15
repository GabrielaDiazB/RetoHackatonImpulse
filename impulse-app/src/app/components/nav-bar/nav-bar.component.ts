import { Component, OnInit } from '@angular/core';
import { FirestoreserviceService } from 'src/app/services/firestore/firestoreservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: FirestoreserviceService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
