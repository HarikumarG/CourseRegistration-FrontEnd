import { TestBed, inject } from '@angular/core/testing';

import { SessionRegisterService } from './session-register.service';

describe('SessionRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionRegisterService]
    });
  });

  it('should be created', inject([SessionRegisterService], (service: SessionRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
