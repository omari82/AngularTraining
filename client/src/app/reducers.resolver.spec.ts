import { TestBed } from '@angular/core/testing';

import { ReducersResolver } from './reducers.resolver';

describe('ReducersResolver', () => {
  let resolver: ReducersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReducersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
