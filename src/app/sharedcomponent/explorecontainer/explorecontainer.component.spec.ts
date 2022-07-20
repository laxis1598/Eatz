import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorecontainerComponent } from './explorecontainer.component';

describe('ExplorecontainerComponent', () => {
  let component: ExplorecontainerComponent;
  let fixture: ComponentFixture<ExplorecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorecontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
