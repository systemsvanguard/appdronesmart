import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDetailsComponent } from './drone_details.component';

describe('DroneDetailsComponent', () => {
  let component: DroneDetailsComponent;
  let fixture: ComponentFixture<DroneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
