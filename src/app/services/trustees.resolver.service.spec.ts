import { TestBed, inject } from '@angular/core/testing';

import { Trustees.ResolverService } from './trustees.resolver.service';

describe('Trustees.ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Trustees.ResolverService]
    });
  });

  it('should be created', inject([Trustees.ResolverService], (service: Trustees.ResolverService) => {
    expect(service).toBeTruthy();
  }));
});
