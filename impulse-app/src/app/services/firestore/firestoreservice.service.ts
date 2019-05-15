import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreserviceService {
  collectionCourses: Observable<Courses[]>;

  constructor(public courses: AngularFirestore) { }

  getCourses() {
    return this.collectionCourses = this.courses.collection('courses').valueChanges();
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
