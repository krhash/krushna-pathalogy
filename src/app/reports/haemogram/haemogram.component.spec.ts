import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaemogramComponent } from './haemogram.component';

describe('HaemogramComponent', () => {
  let component: HaemogramComponent;
  let fixture: ComponentFixture<HaemogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaemogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaemogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
