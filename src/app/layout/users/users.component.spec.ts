import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dragula } from 'ng2-dragula';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;
  let el : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        dragula
      ]
    })
    .compileComponents().then(() => {
      let fixture: ComponentFixture<UsersComponent>;

      // fixture = TestBed.createComponent(UsersComponent);
      // comp = fixture.componentInstance;

      // de = fixture.debugElement.query(By.css('form'));
      // el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
