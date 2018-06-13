import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledCountComponent } from './filled-count.component';

describe('FilledCountComponent', () => {
  let component: FilledCountComponent;
  let fixture: ComponentFixture<FilledCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilledCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
