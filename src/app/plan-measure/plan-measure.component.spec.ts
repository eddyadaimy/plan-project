import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMeasureComponent } from './plan-measure.component';

describe('PlanMeasureComponent', () => {
  let component: PlanMeasureComponent;
  let fixture: ComponentFixture<PlanMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMeasureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
