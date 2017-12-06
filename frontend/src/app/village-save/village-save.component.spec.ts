import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageSaveComponent } from './village-save.component';

describe('VillageSaveComponent', () => {
  let component: VillageSaveComponent;
  let fixture: ComponentFixture<VillageSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
