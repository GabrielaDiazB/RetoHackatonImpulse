import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirestoreserviceService } from '../firestore/firestoreservice.service';

export interface Producto {
  nombre: string, 
  video: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  public arr: Producto = {
    nombre: '',
    video: '',
    description: ''
  }


  constructor(public serviceFirestore: FirestoreserviceService) { }
}
