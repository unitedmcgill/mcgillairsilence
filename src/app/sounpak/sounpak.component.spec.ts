/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SounpakComponent } from './sounpak.component';

describe('exposedComponent', () => {
  let component: SounpakComponent;
  let fixture: ComponentFixture<SounpakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SounpakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SounpakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
