import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacePharmacieComponent } from './interface-pharmacie.component';

describe('InterfacePharmacieComponent', () => {
  let component: InterfacePharmacieComponent;
  let fixture: ComponentFixture<InterfacePharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacePharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
