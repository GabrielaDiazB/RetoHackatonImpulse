import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicmultimediaComponent } from './topicmultimedia.component';

describe('TopicmultimediaComponent', () => {
  let component: TopicmultimediaComponent;
  let fixture: ComponentFixture<TopicmultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicmultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicmultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
