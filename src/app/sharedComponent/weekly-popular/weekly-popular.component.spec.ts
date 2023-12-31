import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPopularComponent } from './weekly-popular.component';

describe('WeeklyPopularComponent', () => {
  let component: WeeklyPopularComponent;
  let fixture: ComponentFixture<WeeklyPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyPopularComponent]
    });
    fixture = TestBed.createComponent(WeeklyPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
