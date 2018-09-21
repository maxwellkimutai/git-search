import { TestBed, inject } from '@angular/core/testing';

import { UserRequestApiService } from './user-request-api.service';

describe('UserRequestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRequestApiService]
    });
  });

  it('should be created', inject([UserRequestApiService], (service: UserRequestApiService) => {
    expect(service).toBeTruthy();
  }));
});
