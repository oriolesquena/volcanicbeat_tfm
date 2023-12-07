import { TestBed } from '@angular/core/testing';

import { FormMailService } from './form-mail.service';

describe('FormMailService', () => {
  let service: FormMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
