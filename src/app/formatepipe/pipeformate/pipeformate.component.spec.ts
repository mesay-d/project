import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeformateComponent } from './pipeformate.component';

describe('PipeformateComponent', () => {
  let component: PipeformateComponent;
  let fixture: ComponentFixture<PipeformateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeformateComponent]
    });
    fixture = TestBed.createComponent(PipeformateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
