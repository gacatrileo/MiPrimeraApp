import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[HttpClient],
      declarations:[
        PerfilPage
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
