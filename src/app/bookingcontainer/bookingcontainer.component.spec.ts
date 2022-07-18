import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BookingcontainerComponent } from './bookingcontainer.component';

describe('BookingcontainerComponent', () => {
  let component: BookingcontainerComponent;
  let fixture: ComponentFixture<BookingcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingcontainerComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
