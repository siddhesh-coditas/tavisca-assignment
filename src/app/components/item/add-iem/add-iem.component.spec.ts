import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIemComponent } from './add-iem.component';

describe('AddIemComponent', () => {
  let component: AddIemComponent;
  let fixture: ComponentFixture<AddIemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
