import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailCardComponent } from './comic-detail-card.component';

describe('ComicDetailCardComponent', () => {
  let component: ComicDetailCardComponent;
  let fixture: ComponentFixture<ComicDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicDetailCardComponent]
    });
    fixture = TestBed.createComponent(ComicDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
