import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatarowComponent } from './datarow.component';

describe('DatarowComponent', () => {
  let component: DatarowComponent;
  let fixture: ComponentFixture<DatarowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatarowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatarowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
