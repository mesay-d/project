import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypegameComponent } from './typegame.component';

describe('TypegameComponent', () => {
  let component: TypegameComponent;
  let fixture: ComponentFixture<TypegameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypegameComponent]
    });
    fixture = TestBed.createComponent(TypegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
