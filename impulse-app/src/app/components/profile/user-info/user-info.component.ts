import { Component, OnInit } from '@angular/core';

import { UserInterface } from '../../../models/user';
import { FirestoreserviceService } from '../../../services/firestore/firestoreservice.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

 constructor(private authService: FirestoreserviceService) { }
 user: UserInterface = {
   name: '',
   email: '',
   photoUrl: '',
 };
 public providerId: string = 'null';
 ngOnInit() {
   this.authService.isAuth().subscribe(user => {
     if (user) {
       this.user.name = user.displayName;
       this.user.email = user.email;
       this.user.photoUrl = user.photoURL;
     }
   })
 }
}
