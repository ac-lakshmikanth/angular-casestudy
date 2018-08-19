import { TestBed, inject } from '@angular/core/testing';

import { TrusteeApiService } from './trustee-api.service';

describe('TrusteeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrusteeApiService]
    });
  });

  it('should be created', inject([TrusteeApiService], (service: TrusteeApiService) => {
    expect(service).toBeTruthy();
  }));
});
