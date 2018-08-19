import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteeListingComponent } from './trustee-listing.component';

describe('TrusteeListingComponent', () => {
  let component: TrusteeListingComponent;
  let fixture: ComponentFixture<TrusteeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrusteeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusteeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
