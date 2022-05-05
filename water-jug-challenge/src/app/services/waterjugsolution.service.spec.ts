import { TestBed } from '@angular/core/testing';

import { WaterjugsolutionService } from './waterjugsolution.service';

describe('WaterjugsolutionService', () => {
  let service: WaterjugsolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterjugsolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
