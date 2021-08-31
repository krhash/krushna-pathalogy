import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidalComponent } from './widal.component';

describe('WidalComponent', () => {
  let component: WidalComponent;
  let fixture: ComponentFixture<WidalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
