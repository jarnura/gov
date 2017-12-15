import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSaveComponent } from './plan-save.component';

describe('PlanSaveComponent', () => {
  let component: PlanSaveComponent;
  let fixture: ComponentFixture<PlanSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
