import { TestBed } from '@angular/core/testing';

import { getAPIservis } from './getAPI.service';

describe('CoinsService', () => {
  let service: getAPIservis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getAPIservis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
