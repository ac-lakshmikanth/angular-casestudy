import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteeEditComponent } from './trustee-edit.component';

describe('TrusteeEditComponent', () => {
  let component: TrusteeEditComponent;
  let fixture: ComponentFixture<TrusteeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrusteeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusteeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
