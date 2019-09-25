import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaHeroComponent } from './busqueda-hero.component';

describe('BusquedaHeroComponent', () => {
  let component: BusquedaHeroComponent;
  let fixture: ComponentFixture<BusquedaHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
