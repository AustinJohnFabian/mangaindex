import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicByTypeComponent } from './comic-by-type.component';

describe('ComicByTypeComponent', () => {
  let component: ComicByTypeComponent;
  let fixture: ComponentFixture<ComicByTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicByTypeComponent]
    });
    fixture = TestBed.createComponent(ComicByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
