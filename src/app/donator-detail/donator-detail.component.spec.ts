import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorDetailComponent } from './donator-detail.component';

describe('DonatorDetailComponent', () => {
  let component: DonatorDetailComponent;
  let fixture: ComponentFixture<DonatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
