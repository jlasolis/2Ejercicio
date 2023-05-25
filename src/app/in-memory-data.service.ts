import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuariosDb = [
      {id: 1, dni:'4876589W', nom:'Juan Carlos API Simulada', ap:'Lopez Sempere', us: 'jcls', pas:'1234', f:'img', dir:'C. de las lomas blancas', tel:634986426,t_us:'1',ac:true },
      {id: 4, dni:'7866984R', nom:'Zaira API Simulada ', ap:'Lopez Sempere', us: 'zls', pas:'1234', f:'img', dir:'C. de las lomas blancas', tel:634983216,t_us:'1',ac:true },
      {id: 7, dni:'9158972E', nom:'Emma API SIMULADA', ap:'Requena Lopez', us: 'erl', pas:'1234', f:'img', dir:'Plaza la viña', tel:695866216,t_us:'1',ac:true }
     
    ];
    return {usuariosDb};
  }

  

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(usuariosDb: Usuario[]): number {
    return usuariosDb.length > 0 ? Math.max(...usuariosDb.map(usuariosDb => usuariosDb.id)) + 1 : 11;
  }
}
