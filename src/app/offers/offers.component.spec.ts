import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { OffersComponent } from './offers.component';
import { HttpClient } from '@angular/common/http';

describe('OffersComponent', () => {
  let component: OffersComponent;
  let fixture: ComponentFixture<OffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersComponent ],
      imports:[
        HttpClientTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
