import { TestBed, inject } from '@angular/core/testing';

import { SessionLoginService } from './session-login.service';

describe('SessionLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionLoginService]
    });
  });

  it('should be created', inject([SessionLoginService], (service: SessionLoginService) => {
    expect(service).toBeTruthy();
  }));
});
