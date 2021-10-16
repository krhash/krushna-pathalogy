import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaRapidComponent } from './malaria-rapid.component';

describe('MalariaRapidComponent', () => {
  let component: MalariaRapidComponent;
  let fixture: ComponentFixture<MalariaRapidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalariaRapidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaRapidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
