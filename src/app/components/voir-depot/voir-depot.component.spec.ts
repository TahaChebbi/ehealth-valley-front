import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirDepotComponent } from './voir-depot.component';

describe('VoirDepotComponent', () => {
  let component: VoirDepotComponent;
  let fixture: ComponentFixture<VoirDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
