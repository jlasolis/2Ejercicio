import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetalleComponent } from './usuarios-detalle.component';

describe('UsuariosDetalleComponent', () => {
  let component: UsuariosDetalleComponent;
  let fixture: ComponentFixture<UsuariosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
