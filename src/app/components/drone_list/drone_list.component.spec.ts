import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesListComponent } from './drone_list.component';

describe('DronesListComponent', () => {
  let component: DronesListComponent;
  let fixture: ComponentFixture<DronesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DronesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DronesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
