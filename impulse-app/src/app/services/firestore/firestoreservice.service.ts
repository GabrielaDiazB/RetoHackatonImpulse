import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from 'src/app/models/user';
import { Observable, of } from 'rxjs';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})

export class FirestoreserviceService {
  collectionCourses: Observable<Courses[]>;
  collectionProfile: Observable<Sellers[]>;
  user: Observable<User>;

  constructor(
    public courses: AngularFirestore,
    public sellers: AngularFirestore,
    private afsAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    this.user = this.afsAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`user.uid/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user);
        }).catch(err => console.log(reject(err)));
    });
  }

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  loginFacebookUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user));
  }

  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user));
  }

  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      description: user.description
    };
    console.log(data);
    return userRef.set(data, { merge: true });
  }


  isUserAdmin(userUid: any) {
    return this.afs.doc<User>(`users/${userUid}`).valueChanges();
  }

  getCourses() {
    return this.collectionCourses = this.courses.collection('courses').valueChanges();
  }

  getUserInfo() {
    return this.collectionProfile = this.sellers.collection('sellers').valueChanges();
  }
}

export interface Courses {
  coach?: {
    cellphone: string,
    name: string
  };
  skills?: Array<any>;
  topics?: Array<Topics>;
}

export interface Topics {
  descrption?: string;
  nametopic?: string;
  video?: string;
}

export interface Sellers {
  courses?: Array<Cursos>;
  description?: string;
  lastname?: string;
  name?: string;
  projects?: Array<string>;
  rubro?: Array<string>;
  skills?: Array<string>;
}

export interface Cursos {
  id?: string;
  status?: string;
}
