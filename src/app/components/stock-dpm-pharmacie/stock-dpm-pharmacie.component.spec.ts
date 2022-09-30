import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDpmPharmacieComponent } from './stock-dpm-pharmacie.component';

describe('StockDpmPharmacieComponent', () => {
  let component: StockDpmPharmacieComponent;
  let fixture: ComponentFixture<StockDpmPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDpmPharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDpmPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
