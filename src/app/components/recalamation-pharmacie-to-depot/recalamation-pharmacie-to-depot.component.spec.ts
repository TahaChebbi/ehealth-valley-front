import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecalamationPharmacieToDepotComponent } from './recalamation-pharmacie-to-depot.component';

describe('RecalamationPharmacieToDepotComponent', () => {
  let component: RecalamationPharmacieToDepotComponent;
  let fixture: ComponentFixture<RecalamationPharmacieToDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecalamationPharmacieToDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecalamationPharmacieToDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
