import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSaveComponent } from './block-save.component';

describe('BlockSaveComponent', () => {
  let component: BlockSaveComponent;
  let fixture: ComponentFixture<BlockSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
