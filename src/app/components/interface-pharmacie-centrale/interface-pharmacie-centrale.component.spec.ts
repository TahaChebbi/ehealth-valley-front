import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacePharmacieCentraleComponent } from './interface-pharmacie-centrale.component';

describe('InterfacePharmacieCentraleComponent', () => {
  let component: InterfacePharmacieCentraleComponent;
  let fixture: ComponentFixture<InterfacePharmacieCentraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacePharmacieCentraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePharmacieCentraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
