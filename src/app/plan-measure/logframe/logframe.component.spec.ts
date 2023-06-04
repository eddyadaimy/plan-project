import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogframeComponent } from './logframe.component';

describe('LogframeComponent', () => {
  let component: LogframeComponent;
  let fixture: ComponentFixture<LogframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
