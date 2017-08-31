/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FibersorbComponent } from './fibersorb.component';

describe('exposedComponent', () => {
  let component: FibersorbComponent;
  let fixture: ComponentFixture<FibersorbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibersorbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibersorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
