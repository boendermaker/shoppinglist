import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbuttonComponent } from './actionbutton.component';

describe('ActionbuttonComponent', () => {
  let component: ActionbuttonComponent;
  let fixture: ComponentFixture<ActionbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
