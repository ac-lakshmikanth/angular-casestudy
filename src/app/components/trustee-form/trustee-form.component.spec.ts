import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteeFormComponent } from './trustee-form.component';

describe('TrusteeFormComponent', () => {
  let component: TrusteeFormComponent;
  let fixture: ComponentFixture<TrusteeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrusteeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
