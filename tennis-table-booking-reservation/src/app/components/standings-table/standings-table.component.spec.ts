import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsTableComponent } from './standings-table.component';

describe('StandingsTableComponent', () => {
  let component: StandingsTableComponent;
  let fixture: ComponentFixture<StandingsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsTableComponent]
    });
    fixture = TestBed.createComponent(StandingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
