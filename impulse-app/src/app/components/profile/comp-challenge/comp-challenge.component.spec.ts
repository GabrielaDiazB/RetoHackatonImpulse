import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompChallengeComponent } from './comp-challenge.component';

describe('CompChallengeComponent', () => {
  let component: CompChallengeComponent;
  let fixture: ComponentFixture<CompChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
