import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealcaseTestComponent } from './realcase-test.component';

describe('RealcaseTestComponent', () => {
  let component: RealcaseTestComponent;
  let fixture: ComponentFixture<RealcaseTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealcaseTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealcaseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
