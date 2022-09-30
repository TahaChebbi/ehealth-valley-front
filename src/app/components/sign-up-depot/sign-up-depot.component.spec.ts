import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDepotComponent } from './sign-up-depot.component';

describe('SignUpDepotComponent', () => {
  let component: SignUpDepotComponent;
  let fixture: ComponentFixture<SignUpDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
