import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeHeroisComponent } from './lista-de-herois.component';

describe('ListaDeHeroisComponent', () => {
  let component: ListaDeHeroisComponent;
  let fixture: ComponentFixture<ListaDeHeroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeHeroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
