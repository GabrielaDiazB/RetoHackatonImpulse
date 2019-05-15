import { TestBed } from '@angular/core/testing';

import { FirestoreserviceService } from './firestoreservice.service';

describe('FirestoreserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreserviceService = TestBed.get(FirestoreserviceService);
    expect(service).toBeTruthy();
  });
});
