import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsTableListComponent } from './standings-table-list.component';

describe('StandingsTableListComponent', () => {
  let component: StandingsTableListComponent;
  let fixture: ComponentFixture<StandingsTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsTableListComponent]
    });
    fixture = TestBed.createComponent(StandingsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
