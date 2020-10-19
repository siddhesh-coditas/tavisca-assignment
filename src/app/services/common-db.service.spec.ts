import { TestBed } from '@angular/core/testing';

import { CommonDbService } from './common-db.service';

describe('CommonDbService', () => {
  let service: CommonDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
