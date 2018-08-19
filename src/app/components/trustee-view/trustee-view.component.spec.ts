import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteeViewComponent } from './trustee-view.component';

describe('TrusteeViewComponent', () => {
  let component: TrusteeViewComponent;
  let fixture: ComponentFixture<TrusteeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrusteeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusteeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
