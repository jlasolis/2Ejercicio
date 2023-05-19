import { Component } from '@angular/core';
import { Curso } from '../cursos';
//import { ContenidoUSUARIOS } from '../mock-datos';
import { UsuariosService } from '../usuarios.service';
import { ContenidoUSUARIOS } from '../mock-datos';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

  //listaUsuarios = ContenidoUsuarios;
  listaUsuarios : any =[];
  
  getUsuarios(): void {
     //this.listaUsuarios = this.UsuariosDelService.getUsuarios();
     //lo de arriba es de antes de suscribirnos
     this.UsuariosDelService.getUsuarios()
      .subscribe(listaUsuarios => this.listaUsuarios = listaUsuarios);
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
  constructor(private UsuariosDelService: UsuariosService) {};
 
}
