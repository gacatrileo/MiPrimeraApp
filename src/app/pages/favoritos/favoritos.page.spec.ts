import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { FavoritosPage } from './favoritos.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FavoritosPage', () => {
  let component: FavoritosPage;
  let fixture: ComponentFixture<FavoritosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[HttpClient],
      declarations:[
        FavoritosPage
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(FavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
