import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getPokemon(name: string){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .pipe(
              map((response: any) => {
                return {
                  name: response.name,
                  order: response.order
                }
              })
            )
  }
}
