/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UniHousingComponent } from './unihousing.component';

describe('exposedComponent', () => {
  let component: UniHousingComponent;
  let fixture: ComponentFixture<UniHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
