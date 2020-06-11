import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  gettingGames(){
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string){
    //la Res API no recibe el elemento id mediante ${this.API_URI}/games/${id}'
    // por lo tanto no se elimina ningun registro 
    //al modificar la expresion dentro del metodo delete se eliminan los datos ya alamacenados
    //forma correcta de obtener el id para la funcion delete: `${this.API_URI}/games/${id}`
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(game:Game){
    return this.http.post(`${this.API_URI}/games`, game);
  }

  updateGame(id: string | number, updatedGame: Game): Observable<Game>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }

}