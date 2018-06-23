import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchResultComponent } from './game-search-result.component';

describe('GameSearchResultComponent', () => {
  let component: GameSearchResultComponent;
  let fixture: ComponentFixture<GameSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
