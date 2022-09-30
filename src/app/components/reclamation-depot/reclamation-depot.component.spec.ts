import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationDepotComponent } from './reclamation-depot.component';

describe('ReclamationDepotComponent', () => {
  let component: ReclamationDepotComponent;
  let fixture: ComponentFixture<ReclamationDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
