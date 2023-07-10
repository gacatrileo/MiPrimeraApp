import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { PokemonesPage } from './pokemones.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PokemonesPage', () => {
  let component: PokemonesPage;
  let fixture: ComponentFixture<PokemonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[HttpClient],
      declarations:[
        PokemonesPage
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    
    
    fixture = TestBed.createComponent(PokemonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
