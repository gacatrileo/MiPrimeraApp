import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { PrincipalPage } from './principal.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PrincipalPage', () => {
  let component: PrincipalPage;
  let fixture: ComponentFixture<PrincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[HttpClient],
      declarations:[
        PrincipalPage
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(PrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
