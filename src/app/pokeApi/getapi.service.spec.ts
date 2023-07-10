import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetapiService } from './getapi.service';

describe('GetapiService', () => {
  let service: GetapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [GetapiService]
    });
    service = TestBed.inject(GetapiService);
  });

  it('should be created', () => {
    const service: GetapiService = TestBed.get(GetapiService);
    expect(service).toBeTruthy();
  });
});
