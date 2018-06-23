import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGamesComponent } from './room-games.component';

describe('RoomGamesComponent', () => {
  let component: RoomGamesComponent;
  let fixture: ComponentFixture<RoomGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
