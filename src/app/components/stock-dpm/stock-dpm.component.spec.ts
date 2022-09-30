import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDpmComponent } from './stock-dpm.component';

describe('StockDpmComponent', () => {
  let component: StockDpmComponent;
  let fixture: ComponentFixture<StockDpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
