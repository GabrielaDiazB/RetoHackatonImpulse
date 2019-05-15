import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreDBService {
  collectionCourses: Observable<Courses[]>;

  constructor( public courses: AngularFirestore ) {}

  // getSellers() {
  //   return this.collectionSellers = this.sellers.collection('sellers').valueChanges()
  // }

  getCourses() {
    // return this.collectionCourses = this.courses.collection('courses').valueChanges()
    console.log('hola')
  }
}

// export interface Sellers {

// }

export interface Courses {
  // coach?: {
  //   cellphone?: string;
  //   name?: string
  // };
  name?: string;
  // skills?:Array<any>;
  // topics?: Array<Topics>;
}

// export interface Topics {
//   description?: string,
//   nameTopic?: string,
//   video?: string,
// }
