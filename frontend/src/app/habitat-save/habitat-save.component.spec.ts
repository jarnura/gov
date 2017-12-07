import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatSaveComponent } from './habitat-save.component';

describe('HabitatSaveComponent', () => {
  let component: HabitatSaveComponent;
  let fixture: ComponentFixture<HabitatSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitatSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitatSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
