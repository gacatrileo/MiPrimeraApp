import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbService } from './db.service';

describe('DbService', () => {
  let service: DbService;

  beforeEach(() => {
  

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [DbService,SQLite]
    });
    service = TestBed.inject(DbService);
  });


  it('should be created', () => {
    const service: DbService = TestBed.get(DbService);
    expect(service).toBeTruthy();
  });
});
