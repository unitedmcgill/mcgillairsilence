/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeatScreenComponent } from './heatscreen.component';

describe('exposedComponent', () => {
  let component: HeatScreenComponent;
  let fixture: ComponentFixture<HeatScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
