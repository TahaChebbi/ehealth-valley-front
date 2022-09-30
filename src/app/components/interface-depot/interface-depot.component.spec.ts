import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDepotComponent } from './interface-depot.component';

describe('InterfaceDepotComponent', () => {
  let component: InterfaceDepotComponent;
  let fixture: ComponentFixture<InterfaceDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
