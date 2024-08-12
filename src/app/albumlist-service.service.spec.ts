import { TestBed } from '@angular/core/testing';

import { AlbumlistServiceService } from './albumlist-service.service';

describe('AlbumlistServiceService', () => {
  let service: AlbumlistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumlistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
