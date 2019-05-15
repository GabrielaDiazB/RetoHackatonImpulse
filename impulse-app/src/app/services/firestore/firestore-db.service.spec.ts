import { TestBed } from '@angular/core/testing';

import { FirestoreDBService } from './firestore-db.service';

describe('FirestoreDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreDBService = TestBed.get(FirestoreDBService);
    expect(service).toBeTruthy();
  });
});
