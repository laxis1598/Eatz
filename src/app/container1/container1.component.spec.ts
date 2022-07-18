import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Container1Component } from './container1.component';

describe('Container1Component', () => {
  let component: Container1Component;
  let fixture: ComponentFixture<Container1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Container1Component ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
