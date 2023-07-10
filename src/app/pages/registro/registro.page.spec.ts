import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[HttpClient],
      declarations:[
        RegistroPage
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
