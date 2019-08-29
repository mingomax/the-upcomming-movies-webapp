import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenreChipsComponent } from './movie-genre-chips.component';

describe('MovieGenreChipsComponent', () => {
  let component: MovieGenreChipsComponent;
  let fixture: ComponentFixture<MovieGenreChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGenreChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
