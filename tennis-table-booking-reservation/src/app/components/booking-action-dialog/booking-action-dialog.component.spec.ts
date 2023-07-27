import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingActionDialogComponent } from './booking-action-dialog.component';

describe('BookingActionDialogComponent', () => {
  let component: BookingActionDialogComponent;
  let fixture: ComponentFixture<BookingActionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingActionDialogComponent]
    });
    fixture = TestBed.createComponent(BookingActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
