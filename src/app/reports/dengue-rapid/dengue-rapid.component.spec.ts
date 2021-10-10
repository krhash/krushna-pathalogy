import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengueRapidComponent } from './dengue-rapid.component';

describe('DengueRapidComponent', () => {
  let component: DengueRapidComponent;
  let fixture: ComponentFixture<DengueRapidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DengueRapidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DengueRapidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
