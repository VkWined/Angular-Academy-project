import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTabComponent } from './students-tab.component';

describe('StudentsTabComponent', () => {
  let component: StudentsTabComponent;
  let fixture: ComponentFixture<StudentsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsTabComponent]
    });
    fixture = TestBed.createComponent(StudentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
