import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogframeModalComponent } from './logframe-modal.component';

describe('LogframeModalComponent', () => {
  let component: LogframeModalComponent;
  let fixture: ComponentFixture<LogframeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogframeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogframeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
