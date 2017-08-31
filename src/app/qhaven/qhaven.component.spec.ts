/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QHavenComponent } from './qhaven.component';

describe('exposedComponent', () => {
  let component: QHavenComponent;
  let fixture: ComponentFixture<QHavenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QHavenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QHavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
