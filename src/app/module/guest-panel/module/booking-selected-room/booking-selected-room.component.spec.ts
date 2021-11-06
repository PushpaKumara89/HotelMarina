import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSelectedRoomComponent } from './booking-selected-room.component';

describe('BookingSelectedRoomComponent', () => {
  let component: BookingSelectedRoomComponent;
  let fixture: ComponentFixture<BookingSelectedRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSelectedRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSelectedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
