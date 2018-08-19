import { TestBed, inject } from '@angular/core/testing';

import { Trustee.ResolverService } from './trustee.resolver.service';

describe('Trustee.ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Trustee.ResolverService]
    });
  });

  it('should be created', inject([Trustee.ResolverService], (service: Trustee.ResolverService) => {
    expect(service).toBeTruthy();
  }));
});
