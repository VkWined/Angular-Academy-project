import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTabComponent } from './courses-tab.component';

describe('CoursesTabComponent', () => {
  let component: CoursesTabComponent;
  let fixture: ComponentFixture<CoursesTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesTabComponent]
    });
    fixture = TestBed.createComponent(CoursesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
