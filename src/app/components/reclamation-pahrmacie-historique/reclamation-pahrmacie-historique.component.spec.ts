import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationPahrmacieHistoriqueComponent } from './reclamation-pahrmacie-historique.component';

describe('ReclamationPahrmacieHistoriqueComponent', () => {
  let component: ReclamationPahrmacieHistoriqueComponent;
  let fixture: ComponentFixture<ReclamationPahrmacieHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationPahrmacieHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationPahrmacieHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
