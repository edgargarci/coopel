import { TestBed } from '@angular/core/testing';

import { TestCollectionsService } from './test-collections.service';

describe('TestCollectionsService', () => {
  let service: TestCollectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCollectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
